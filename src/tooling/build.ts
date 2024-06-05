import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import browserslist from 'browserslist'
import { Glob } from 'bun'
import { browserslistToTargets, transform } from 'lightningcss'
import { compileAsync } from 'sass'

const glob = new Glob('./src/style/components/**/*.sass')
const files = glob.scanSync('.')

const buildFolder = './build'
const browsers = browserslist('> .5% or last 2 versions')

try {
  try {
    rmSync(buildFolder, { recursive: true, force: true })
  } catch (e) {
    console.error(e)
  }
  mkdirSync(buildFolder)

  for (const file of files) {
    const fileName = file.split('/').pop()
    if (!fileName) continue
    const cssFile = `${buildFolder}/${fileName.replace(/\.sass$/, '.css')}`

    const compileResult = await compileAsync(file)
    writeFileSync(cssFile, compileResult.css)

    const { code, map } = transform({
      filename: cssFile,
      code: Buffer.from(compileResult.css),
      minify: true,
      targets: browserslistToTargets(browsers),
      sourceMap: true,
    })

    writeFileSync(cssFile, compileResult.css)
    writeFileSync(cssFile.replace(/\.css$/, '.min.css'), code)
    writeFileSync(`${cssFile}.map`, map as Uint8Array)
  }

  //$`lightningcss --minify --targets \'>= 0.25%\' ./build/**/*.css -o ./build/min/**/*.min.css`
} catch (e) {
  console.error(e)
}

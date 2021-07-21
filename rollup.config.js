import esbuild from 'rollup-plugin-esbuild' //typescript to js
import vue from 'rollup-plugin-vue' //.vue to .js
import scss from 'rollup-plugin-scss'//.scss to .js
import dartSass from 'sass'; //用来支持scss插件
import { terser } from "rollup-plugin-terser" //把js代码变得看不懂

export default {
    input: 'src/lib/index.ts',
    output: {
        globals: {
            vue: 'Vue'
        },
        name: 'Dobby',
        file: 'dist/lib/dobby.js',
        format: 'umd',//文件输出格式
        plugins: [terser()]
    },
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        esbuild({
            include: /\.[jt]sx?$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015' //es6
        }),
        vue({
            include: /\.vue$/,
        })
    ],
}
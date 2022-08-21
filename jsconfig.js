module.exports = {
    compilerOptions: {
        target: 'es5',
        lib: ['dom', 'dom.iterable', 'esnext'],
        allowJs: true,
        skipLibCheck: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        noEmit: true,
        esModuleInterop: true,
        module: 'esnext',
        moduleResolution: 'node',
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: 'preserve',
        baseUrl: '.',
        paths: {
            '@components/*': ['./src/components/*'],
            '~/*': ['./public/*']
        },
        incremental: true
    },
    include: ['**/*.js', '**/*.jsx'],
    exclude: ['node_modules'],
    moduleResolution: ['node_modules', '.next', 'node']
}

# AOT
需要编译两边。
第一遍，使用开发的main.ts
第二遍，在生成aot后，需要更新main.ts，或者更新tsconfig-aot.js。指定的入口文件需要使用ngFactory进行引导。

# ROLLUP
使用指定ngfactory的main.js作为入口文件
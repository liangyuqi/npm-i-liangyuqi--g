#!/usr/bin/env node
var program = require('commander');
var color = require('colors-cli/toxic')
var appInfo = require('./../package.json');
var interest = require('./../lib/interest.js');
var info = require('./../lib/info.json');
var basicinfo = info.basicinfo;//基本信息数据：
var log = console.log;

program
    // .allowUnknownOption()//不报错误
    .version(appInfo.version)
    .usage('in -[options] <package>')
    .parse(process.argv);

program
    .command('information [cmd]')
    .alias('in')
    .description('这里是我的详细信息！'.x10)
    .option("-b, --basicinfo [type]", "基本信息")
    .option("-i, --interest [type]", "兴趣爱好")
    .action(function(cmd, options){
        var nm = typeof options.name=='string'?options.name:""
        // log('information "%s" 使用 %s 模式', cmd, nm);
        // log("test:",program);·

        interest(cmd,options);

    }).on('--help', function() {

        // 图片文字 http://ascii.mastervb.net/text_to_ascii.php

        // log('Ⓦ Ⓒ Ⓙ');
        log('                                 '.x10);
        log('                                 '.x10);
        log(' _____   _____  ______   ______  '.x10);
        log('| | \ \   | |  | |  | | / |  | \ '.x10);
        log('| |  | |  | |  | |__| | | |  | | '.x10);
        log('|_|_/_/  _|_|_ |_|  |_| \_|__|_/ '.x10);
        log('                                 '.x10);
        log('                                 '.x10);

        // log('  basicinfo 说明:');
        log();
        log('    in  预览信息');
        log();
        log('    -b, --basicinfo 基本信息');
        for (var a in basicinfo.data) {
            log("       "+ a + ': ' + basicinfo.data[a].info)
        };
        log('    -i, --interest 兴趣爱好');
        log();
    });

//默认不传参数输出help
if (!process.argv[2]) {
    program.help();
    console.log("走没有这个");
}

program.parse(process.argv);
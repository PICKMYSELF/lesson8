/*
1、把0到9数字的“lcd灯”字符串全部写进arr_numbers_lcd数组中；
2、检测输入的数字，把输入的数字转换成1个1个数字形式的数组；（使用split()函数）
3、输入的数字里，把每个数字lcd灯的第一排字符写进第一排的字符串中；（使用join()函数）
4、同理，第二排字符写进第二排的字符串，第三排字符写进第三排的字符串；
5、把第一、二、三排的字符串打印出来。
*/

module.exports = function main(input) {
    //第1步
    var arr_numbers_lcd = [];
    arr_numbers_lcd.push('._.\n|.|\n|_|');  //数字0
    arr_numbers_lcd.push('...\n..|\n..|');  //数字1
    arr_numbers_lcd.push('._.\n._|\n|_.');  //数字2
    arr_numbers_lcd.push('._.\n._|\n._|');  //数字3
    arr_numbers_lcd.push('...\n|_|\n..|');  //数字4
    arr_numbers_lcd.push('._.\n|_.\n._|');  //数字5
    arr_numbers_lcd.push('._.\n|_.\n|_|');  //数字6
    arr_numbers_lcd.push('._.\n..|\n..|');  //数字7
    arr_numbers_lcd.push('._.\n|_|\n|_|');  //数字8
    arr_numbers_lcd.push('._.\n|_|\n..|');  //数字9
    
    //第2步
    var arr_input = input.split("");    //举个例子   input:["910"] 变成了 arr_input：["9", "1", "0"]
    for (var i = 0; i < arr_input.length; i ++) {
        arr_input[i] = Number(arr_input[i]);
    }                                               //arr_input：["9", "1", "0"] 变成了 [9, 1, 0]
    
    //第3步，打印lcd灯的第一排字符
    var arr_first_line = [];
    for (var i = 0; i < arr_input.length; i ++) {
        arr_first_line.push(arr_numbers_lcd[arr_input[i]].substring(0, 3)); 
    }
    var str_first_line = arr_first_line.join(' ') + '\n';
    
    //第4步，同理，打印lcd灯的第二、三排字符
    var arr_second_line = [];
    for (var i = 0; i < arr_input.length; i ++) {
        arr_second_line.push(arr_numbers_lcd[arr_input[i]].substring(4, 7)); 
    }
    var str_second_line = arr_second_line.join(' ') + '\n';
    
    var arr_third_line = [];
    for (var i = 0; i < arr_input.length; i ++) {
        arr_third_line.push(arr_numbers_lcd[arr_input[i]].substring(8)); 
    }
    var str_third_line = arr_third_line.join(' ') + '\n';
    
    //第5步，打印最终结果
    return str_first_line + str_second_line + str_third_line;
};

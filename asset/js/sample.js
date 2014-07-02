/**
 * Created by k_sugio on 7/2/14.
 */

function isProductFromNo(num, id, callback){
    var FILE_PATH = 'asset/src/id.txt';
    $.ajax({
        type: 'GET',
        url: FILE_PATH,
        datatype: 'text',
        success: function(data){
            var lines = data.split('\n');
            var result = $.inArray(String(id), lines);
            callback(num, result, lines[result]);
        },
        error: function(){
            $('#disp1').append("<p>ERROR");
        }
    });
}

$(function(){
    var ids = [
        1,
        6,
        5,
        7,
        2,
        10,
        13
    ];

    for(var i=0;i<ids.length;i++){
        isProductFromNo(i, ids[i], function(num, res, value){
            if(res == -1){
                $('#disp1').append(num + ": Unmatch<br />");
            } else {
                $('#disp1').append(num + ": Match => " + value + "<br />");
            }
        })
    }
});

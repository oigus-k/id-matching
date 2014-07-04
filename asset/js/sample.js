/**
 * Created by k_sugio on 7/2/14.
 */

var Products = typeof Products == "undefined" ? {} : Products;

Products.MatchID = function(){
    var FILE_PATH = 'asset/src/id.txt';
    var ids = [
        1,
        6,
        5,
        7,
        2,
        10,
        13
    ];
    var isProductFromNo = function(num, id, callback){
        $.ajax({
            type: 'GET',
            url: FILE_PATH,
            datatype: 'text'
        })
            .done(function(data){
                var lines = data.split('\n');
                var result = $.inArray(String(id), lines);
                setTimeout(function(){console.log("process 2")},3000);
                callback(num, result, lines[result]);
            })
            .fail(function(){
                $('#disp1').append("<p>ERROR");
            });
    };

    $(function(){
        console.log("process 1");
        var count = ids.length;
        for(var i=0;i<count;i++){
            isProductFromNo(i, ids[i], function(num, res, value){
                if(res == -1){
                    $('#disp1').append(num + ": Unmatch<br />");
                } else {
                    $('#disp1').append(num + ": Match => " + value + "<br />");
                }
            });
        }
        console.log("end");
    });

};


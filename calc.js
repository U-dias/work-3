//計算結果//
var result="";
//=で計算したかどうか//
var is_calc=false;

//初期表示//
window.onload=function(){
    result=document.getElementById('result');
};

//「Clear」キー入力//
function c_click(){
    result.value="0";//計算結果に０を表示//
    is_calc=false;
};

//数字キー入力//
function num_click(val){
  if(is_calc)  result.value = "0";
  is_calc = false;  

  if(result.value =="0" && val == "0"){//計算結果が０の時にvalに０を代入
    result.value = "0";//０を返す
  }else if(result.value == "0" && val == "."){//計算結果が０の時に.を入力
    result.value = "0.";//0.を返す
  }else if(result.value == "0"){//0以外を代入
    result.value = val;//入力された値を返す
  }else if(result.value == "" && val == "."){
    result.value = ""
  }else if(result.value.endsWith(".") && val == "."){
    
  }else{
    result.value += val;
  }
}

//演算子キー入力//
function ope_click(val){
  if(is_calc)  is_calc = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
    //sliceの引数で開始位置より終了位置の値を小さくして空文字を返す+入力された値を表示
  } else {
    result.value += val;
    //入力された値を加えて代入
  }
}


//イコールキー入力//
function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);
//演算子キーが最後にある場合sliceの引数で除外
  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
//tempに計算結果を代入＋演算子をjavascript上で動くように置き換え
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
//計算結果に無限数と数字以外の場合error表示
  }else{
    result.value = temp;
    is_calc = true;
  }
}

//入力された値が演算子かどうかの判定//
function is_ope_last(){
  return ["+","-","×","÷","%"].includes(result.value.toString().slice(-1));
}

















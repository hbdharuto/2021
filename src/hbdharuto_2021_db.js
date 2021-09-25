
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/background_pattern.jpg","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2018haruto_normal.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2020haruto_normal.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2021haruto_normal.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2018haruto_correct.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2020haruto_correct.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2021haruto_correct.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2018haruto_incorrect.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2020haruto_incorrect.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2021haruto_incorrect.PNG","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/question_bg.png","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/bg_answer_raw.jpg","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/Harunya-Catto-1.png","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/Harunya-Catto-2.png","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/Harunya-Catto-3.png","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/Harunya-Catto-4.png","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/Harunya-Catto-5.png","https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/Harunya-Catto-Conan.png");


var arrQuestion = [
  [ 0, // First Question
    '<span class="t_en">True or false, Haruto’s manager was there when he first met Sho.</span>', // q in en
    '<span class="t_jp">悠人が初めて翔と出会った時、同じ場にマネージャーもいた</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    0, // comment 1 first indeks
    1 // comment 2 first indeks
  ],
  [ 1, // Question ID
    '<span class="t_en">Which one of these was <b>not</b> mentioned by Haruto when Sho asked about music instruments Haruto could play?</span>', // q in en
    '<span class="t_jp">翔が悠人になにか楽器をするのかを聞いた時、悠人が言及しなかったものは次のうちどれ</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Pianika</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Ukulele</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Castanets</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Tambourine</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">ピアニカ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">ウクレレ</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">カスタネット</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">タンバリン</span></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    2, // comment 1 first indeks
    3 // comment 2 first indeks
  ],
  [ 2, // Question ID
    '<span class="t_en">Haruto once helped Reiji opening the door while Reiji carried a plant. Haruto said the plant looked Italian, and Reiji guessed it’s because the leaves looked like...</span>', // q in en
    '<span class="t_jp">翔が悠人になにか楽器をするのかを聞いた時、悠人が言及しなかったものは次のうちどれ</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Farfalle</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Rigafoni</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Conchiglie</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Gnocchi</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">ファルファッレ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">リガトーニ</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">コンキリエ</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">ニョッキ</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    4, // comment 1 first indeks
    5 // comment 2 first indeks
  ],
  [ 3, // Question ID
    '<span class="t_en">True or false: Haruto’s next role was to be a ninja, so he wanted to interview Reiji and was lying in wait for him.</span>', // q in en
    '<span class="t_jp">玲司にインタビューをしようと悠人が待ち伏せしていたのは、次にドラマでやる役が忍者だったからだ</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    6, // comment 1 first indeks
    8 // comment 2 first indeks
  ],
  [ 4, // Question ID
    '<span class="t_en">Who was the first person to call Haruto a warrior?</span>', // q in en
    '<span class="t_jp">悠人を初めて｢武士｣と呼んだのは？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Reiji</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Ayumu</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Gaku</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Ruka</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">玲司</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">歩</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">岳</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">ルカ</span></div>'],  // a in jp
    3,  // indeks jawaban yang benar
    10, // comment 1 first indeks
    12 // comment 2 first indeks
  ],
  [ 5, // Question ID
    '<span class="t_en">Haruto was humming a song while he poured coffee for Sho. Which song was it?</span>', // q in en
    '<span class="t_jp">悠人が翔にコーヒーを淹れていた時、口ずさんでいた曲は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Yasashii Sekai</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">ROCK DOWN</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Kodoku no Vampire</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Gekisou DIVE</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">優しい世界</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">ROCKDOWN</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">孤独のVampire</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">激奏D.I.V.E</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    13, // comment 1 first indeks
    14 // comment 2 first indeks
  ],
  [ 6, // Question ID
    '<span class="t_en">There was a basketball relay of hell game in the show ROCKDOWN starred at. For this game, they divided the team into three roles. Which one was Haruto’s role? </span>', // q in en
    '<span class="t_jp">ROCKDOWNが出演した番組内でバスケットボールの地獄のリレーゲームをした際、悠人がチームで担っていた役割は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Answering quizzes</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Catching the balls</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Throwing the balls to the hoop</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Cheer and support everyone</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">クイズの回答者</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">ボールのキャッチャー</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">フープにボールを投げる役</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">皆の応援、サポート役</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    16, // comment 1 first indeks
    19 // comment 2 first indeks
  ],
  [ 7, // Question ID
    '<span class="t_en">True or false: Haruto thought Gaku would ask for recipes from an old man in a village bakery if ROCKDOWN goes on a trip to France', // q in en
    '<span class="t_jp">悠人はROCKDOWN全員でフランスに旅行をするなら岳が村のパン屋のおじいさんにレシピを聞くだろうと思っていた</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    20, // comment 1 first indeks
    22 // comment 2 first indeks
  ],
  [ 8, // Question ID
    '<span class="t_en">Sho, Ruka, and Haruto once bathed Vazz and Rock together. What was Haruto’s contribution in this?</span>', // q in en
    '<span class="t_jp">翔、悠人、ルカの3人でバズとロックをお風呂に入れた際の悠人の役割は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Holding the shower</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Shampooing Vazz</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Shampooing Rock</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Petting Vazz and Rock</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">シャワーを持つ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">バズのシャンプー</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">ロックのシャンプー</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">バズとロックを撫でる</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    24, // comment 1 first indeks
    25 // comment 2 first indeks
  ],
  [ 9, // Question ID
    '<span class="t_en">Haruto used the traditional kintsugi kit to repair Reiji’s mug after he, Ruka, and Sho broke it.', // q in en
    '<span class="t_jp">悠人は翔とルカと3人で割ってしまった玲司のマグカップを金継ぎキットを使って修理した</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    27, // comment 1 first indeks
    29 // comment 2 first indeks
  ],
  [ 10, // Question ID
    '<span class="t_en">When Haruto and Ouka cooked ramen with stir-fried vegetables together, which vegetable did Haruto chop on his own?</span>', // q in en
    '<span class="t_jp">悠人と凰香が2人で野菜炒め入りラーメンを作った際、悠人が切った野菜は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Cabbage</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Carrot</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Mushroom</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Onion</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">キャベツ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">にんじん</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">マッシュルーム</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">玉ねぎ</span></div>'],  // a in jp
    3,  // indeks jawaban yang benar
    32, // comment 1 first indeks
    33 // comment 2 first indeks
  ],
  [ 11, // Question ID
    '<span class="t_en">What animal did Issa compare Haruto with, when Haruto struggled to stand up after sitting seiza-style for quite a long time?</span>', // q in en
    '<span class="t_jp">悠人と凰香が2人で野菜炒め入りラーメンを作った際、悠人が切った野菜は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Baby horse</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Baby elephant</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Baby whale</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Baby koala</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">産まれたての小鹿</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">産まれたてのゾウ</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">産まれたてのクジラ</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">産まれたてのコアラ</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    35, // comment 1 first indeks
    37 // comment 2 first indeks
  ],
  [ 12, // Question ID
    '<span class="t_en">Where did Haruto and Ruka not go together in their outing?</span>', // q in en
    '<span class="t_jp">悠人とルカがおでかけで一緒に行かなかった場所は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Movie teathre</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Collaboration cafe</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Boutique / clothes store</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Hot pot restaurant</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">映画館</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">コラボカフェ</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">服屋</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">火鍋レストラン</span></div>'],  // a in jp
    3,  // indeks jawaban yang benar
    39, // comment 1 first indeks
    40 // comment 2 first indeks
  ],
  [ 13, // Question ID
    '<span class="t_en">In his outing with Futaba, Haruto told him that his sister works as...</span>', // q in en
    '<span class="t_jp">二葉が出かけた際に悠人が話した、彼の姉の仕事は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Policewoman</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Teacher</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Nurse</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Illustrator</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">警察官</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">教師</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">看護師</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">イラストレーター</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    42, // comment 1 first indeks
    43 // comment 2 first indeks
  ],
  [ 14, // Question ID
    '<span class="t_en">In an outing with Futaba and Gaku, Haruto admitted that he got a lot of offers to try acting.</span>', // q in en
    '<span class="t_jp">二葉と岳との外出で、悠人は演技の仕事の打診が沢山来たと言っていた</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    45, // comment 1 first indeks
    46 // comment 2 first indeks
  ],
  [ 15, // Question ID
    '<span class="t_en">True or false: Haruto is sensitive about ghosts / otherwordly beings.</span>', // q in en
    '<span class="t_jp">悠人は霊感があるような素振りの時があった</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    48, // comment 1 first indeks
    49 // comment 2 first indeks
  ],
  [ 16, // Question ID
    '<span class="t_en">Who was the Quell member Haruto and Gaku met at the dorm’s rooftop?</span>', // q in en
    '<span class="t_jp">悠人と岳が寮の屋上で出会ったQUELLのメンバーは？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Shu</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Eichi</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Issei</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Ichiru</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">柊羽</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">英知</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">壱流</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">壱星</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    50, // comment 1 first indeks
    51 // comment 2 first indeks
  ],
  [ 17, // Question ID
    '<span class="t_en">What tea flavor is Haruto fond of?</span>', // q in en
    '<span class="t_jp">悠人が好きな紅茶の味は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Peach</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Blackcurrant</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Strawberry</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Lemon</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">ピーチ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">カシス</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">ストロベリー</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">レモン</span></div>'],  // a in jp
    3,  // indeks jawaban yang benar
    52, // comment 1 first indeks
    53 // comment 2 first indeks
  ],
  [ 18, // Question ID
    '<span class="t_en">When he was a kid, Haruto thought this figure was a subordinate from Iga:</span>', // q in en
    '<span class="t_jp">悠人は子供の頃、何を伊賀の部下だと思っていた？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">The Cupid</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Tooth Fairy</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Santa Claus</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Easter Bunny</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">キューピッド</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">歯の妖精</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">サンタクロース</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">イースターバニー</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    54, // comment 1 first indeks
    55 // comment 2 first indeks
  ],
  [ 19, // Question ID
    '<span class="t_en">A nickname Haruto got for the shortness and conciseness of his sentences:</span>', // q in en
    '<span class="t_jp">文章の短さと簡素さから付けられた悠人のあだ名は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Telegram</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Radio</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Motorcycle</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Jetplane</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">電報</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">ラジオ</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">オートバイ</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">ジェット機</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    57, // comment 1 first indeks
    58 // comment 2 first indeks
  ],
  [ 20, // Question ID
    '<span class="t_en">Which Vazzy members said that the word [sunshine] reminds him of Haruto in many ways?</span>', // q in en
    '<span class="t_jp">｢太陽｣と聞いて悠人を思い出すと言っていたVAZZYのメンバーは？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Takaaki</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Ouka</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Issa</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Futaba</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">孝明</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">凰香</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">一紗</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">二葉</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    61, // comment 1 first indeks
    62 // comment 2 first indeks
  ],
  [ 21, // Question ID
    '<span class="t_en">Which food Haruto did not make “a Gaku of…” in Gaku’s birthday?</span>', // q in en
    '<span class="t_jp">岳の誕生日に悠人が作らなかった岳モチーフの料理は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Pastry Bread</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Rice</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Instant Noodle</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Hotcake</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">菓子パン</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">お米</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">インスタント麺</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">ホットケーキ</span></div>'],  // a in jp
    3,  // indeks jawaban yang benar
    63, // comment 1 first indeks
    64 // comment 2 first indeks
  ],
  [ 22, // Question ID
    '<span class="t_en">Who did not go with Haruto to Disneyland?</span>', // q in en
    '<span class="t_jp">悠人と一緒に｢ネズミ年にちなんだテーマパーク｣に行かなかったのは？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Sho</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Reiji</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Ayumu</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Nao</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">翔</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">玲司</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">歩</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">直助</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    66, // comment 1 first indeks
    67 // comment 2 first indeks
  ],
  [ 23, // Question ID
    '<span class="t_en">Which GROWTH song is Haruto’s favorite?</span>', // q in en
    '<span class="t_jp">悠人が好きなGrowthの曲は？</span>', // q in jp
    [ '<div class="answer_bottom">A</div><div class="answer_centering">Mahou no Kizuna</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Rudder Qiana</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Fushichou no Nebula</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Moonlight Refrain</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">魔法のキズナ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">ラダ・キアナ</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">不死鳥のネビュラ</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">月影のリフレイン</span></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    68, // comment 1 first indeks
    69 // comment 2 first indeks
  ],
  [ 24, // Question ID
    '<span class="t_en">True or false, while Haruto is not okay with ghosts, he loves aliens and monsters.</span>', // q in en
    '<span class="t_jp">悠人はお化けや幽霊は苦手だが、宇宙人や怪獣は好きらしい</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    70, // comment 1 first indeks
    75 // comment 2 first indeks
  ],
  [ 25, // Question ID
    '<span class="t_en">What does Haruto wear to sleep?</span>', // q in en
    '<span class="t_jp">悠人が就寝時に着ているものは？</span>', // q in jp
   [ '<div class="answer_bottom">A</div><div class="answer_centering">Gelato Pique pajamas</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Normal pajamas</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Sweats and/or jersey</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Whatever he likes</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">ジェラピケのパジャマ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">普通のパジャマ</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">スウェット・ジャージ</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">なんでも</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    76, // comment 1 first indeks
    77 // comment 2 first indeks
  ],
  [ 26, // Question ID
    '<span class="t_en">What will Haruto yell if he gets hit by a washbasin?</span>', // q in en
    '<span class="t_jp">不意にタライが落ちてきた！悠人ならなんと言う？</span>', // q in jp
   [ '<div class="answer_bottom">A</div><div class="answer_centering">“WASHBASIN BARRAGE PUNCH!”</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">“WASHBASIN TRAIN WRECK!”</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">“WASHBASIN METEOR FALLS!”</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">“WASHBASIN BIG BANG!”</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">タライのパンチ！！！</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">タライで大惨事！！！</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">タライ流星群！！！</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">タライでビックバン！！！</span></div>'],  // a in jp
    3,  // indeks jawaban yang benar
    78, // comment 1 first indeks
    79 // comment 2 first indeks
  ],
  [ 27, // Question ID
    '<span class="t_en">Haruto never encouraged Sho about his insecurities regarding his leadership.</span>', // q in en
    '<span class="t_jp">悠人は翔のリーダーとしての悩みを聞いたことがない</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    80, // comment 1 first indeks
    81 // comment 2 first indeks
  ],
  [ 28, // Question ID
    '<span class="t_en">What animal did Haruto imitate when he was scared?</span>', // q in en
    '<span class="t_jp">怖がっている時の悠人は何に似ている？</span>', // q in jp
   [ '<div class="answer_bottom">A</div><div class="answer_centering">Whale</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Sheep</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Koala</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Hedgehog</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">クジラ</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">羊</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">コアラ</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">ハリネズミ</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    83, // comment 1 first indeks
    84 // comment 2 first indeks
  ],
  [ 29, // Question ID
    '<span class="t_en">At which degree (in Celcius) of heat would Haruto feel like he’s being hugged?</span>', // q in en
    '<span class="t_jp">悠人が｢抱きしめられている｣と感じる温度は？</span>', // q in jp
   [ '<div class="answer_bottom">A</div><div class="answer_centering">36℃</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">38℃</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">40℃</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">42℃</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">36℃</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">38℃</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">40℃</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">42℃</span></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    85, // comment 1 first indeks
    86 // comment 2 first indeks
  ],
  [ 30, // Question ID
    '<span class="t_en">What does Haruto commonly put in his Kujikanya?</span>', // q in en
    '<span class="t_jp">悠人が｢くじかにゃー｣の頭に入れる絵文字といえば？</span>', // q in jp
   [ '<div class="answer_bottom">A</div><div class="answer_centering">Ribbon 🎀</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Naruto 🍥</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Sakura 🌸</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Fish 🐟</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">リボン 🎀</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">ナルト 🍥</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">桜 🌸</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">魚 🐟</span></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    87, // comment 1 first indeks
    88 // comment 2 first indeks
  ],
  [ 31, // Question ID
    '<span class="t_en">What kind of hairstyle does Haruto want to try?</span>', // q in en
    '<span class="t_jp">悠人がしてみたいヘアアレンジは？</span>', // q in jp
   [ '<div class="answer_bottom">A</div><div class="answer_centering">Braid</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Ponytail</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">Twintails</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Bun</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">三つ編み</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">ポニーテール</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">ツインテール</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">おだんご</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    89, // comment 1 first indeks
    90 // comment 2 first indeks
  ],
  [ 32, // Question ID
    '<span class="t_en">True or false, Haruto might sing in his sleep.</span>', // q in en
    '<span class="t_jp">悠人は寝起きに歌うことがある</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    0,  // indeks jawaban yang benar
    91, // comment 1 first indeks
    92 // comment 2 first indeks
  ],
  [ 33, // Question ID
    '<span class="t_en">Which Tsukiuta members Haruto did not add to his contact list at the same time?</span>', // q in en
    '<span class="t_jp">悠人のアドレス帳にいないツキウタ。メンバーは？</span>', // q in jp
   [ '<div class="answer_bottom">A</div><div class="answer_centering">Hajime</div>',
      '<div class="answer_bottom">B</div><div class="answer_centering">Arata</div>',
      '<div class="answer_bottom">C</div><div class="answer_centering">You</div>',
      '<div class="answer_bottom">D</div><div class="answer_centering">Iku</div>'], // a in en

    [ '<div class="answer_bottom">A</div><div class="answer_centering"><span class="t_jp">始</span></div>',
      '<div class="answer_bottom">B</div><div class="answer_centering"><span class="t_jp">新</span></div>',
      '<div class="answer_bottom">C</div><div class="answer_centering"><span class="t_jp">陽</span></div>',
      '<div class="answer_bottom">D</div><div class="answer_centering"><span class="t_jp">郁</span></div>'],  // a in jp
    2,  // indeks jawaban yang benar
    94, // comment 1 first indeks
    95 // comment 2 first indeks
  ],
  [ 34, // Question ID
    '<span class="t_en">True or false, Haruto’s childhood dream was to become Mito Koumon’s sword.</span>', // q in en
    '<span class="t_jp">悠人の幼少期の夢は水戸黄門の刀になることだった</span>', // q in jp
    ['<div class="answer_centering">True</div>','<div class="answer_centering">False</div>'], // a in en
    ['<div class="answer_centering"><i class="far fa-circle"></i></div>',' <div class="answer_centering"><i class="fas fa-times"></i></div>'],  // a in jp
    1,  // indeks jawaban yang benar
    96, // comment 1 first indeks
    97 // comment 2 first indeks
  ]

];




var arrAnswered;
var arrCorrectAnswer;
var arrListRightWrong;

if (localStorage.getItem("hbdHawwu2021_arrAnswered") === null) {
  arrAnswered = [];
  localStorage.setItem("hbdHawwu2021_arrAnswered", JSON.stringify(arrAnswered)); 
}

else {
  arrAnswered = JSON.parse(localStorage.getItem("hbdHawwu2021_arrAnswered"));
}

if (localStorage.getItem("hbdHawwu2021_arrCorrectAnswer") === null) {
  arrCorrectAnswer = [];
  localStorage.setItem("hbdHawwu2021_arrCorrectAnswer", JSON.stringify(arrCorrectAnswer)); 
}

else {
  arrCorrectAnswer = JSON.parse(localStorage.getItem("hbdHawwu2021_arrCorrectAnswer"));
}


if (localStorage.getItem("hbdHawwu2021_listRightWrong") === null) {
  arrListRightWrong = [];
  localStorage.setItem("hbdHawwu2021_listRightWrong", JSON.stringify(arrListRightWrong)); 
}

else {
  arrListRightWrong = JSON.parse(localStorage.getItem("hbdHawwu2021_listRightWrong"));
}



if (localStorage.getItem("hbdHawwu2021_appLanguage") === null) {
  localStorage.setItem("hbdHawwu2021_appLanguage", 0); 
}


if (localStorage.getItem("hbdHawwu2021_curQuestionProg") === null) {
  localStorage.setItem("hbdHawwu2021_curQuestionProg", 1); 
}

if (localStorage.getItem("hbdHawwu2021_curHawwu") === null) {
  localStorage.setItem("hbdHawwu2021_curHawwu", 2018); 
}






/*



*
/


/* var curLang = 0; // 0 = en, 1 = jp

var curQuestionProg = 1;

var curHawwu = "2018";*/
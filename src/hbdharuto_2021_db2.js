var arrMessage = [
  [ 0, // First message
    0, // Siapa yg ngomong 
    '<span class="t_en">Yep, pretty sure he was there! He looked at Haruto like his own child… </span>', // msg in en
    '<span class="t_jp">そうだね、マネージャーさんもそこにいたよ。悠人のことを我が子を見るような目で見守っていたっけ……</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 1, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">If it’s a question about Haruto and Sho’s first meeting, then the answer should be in <b>Bi-Color Vol. 7, diamond</b></span>', // msg in en
    '<span class="t_jp">翔と悠人の初対面のことはbi-colorシリーズの1st、vol.7 diamondで知れる筈です</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 2, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">Oh, I don’t think he mentioned ukulele. They don’t teach how to play ukulele at school, right?</span>', // msg in en
    '<span class="t_jp">そういえばウクレレの話はしなかったね。学校ではウクレレの弾き方は教えてくれないんだっけ</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 3, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Uh, yes. this one’s answer should be in <b>Bi-Color Season I Vol. 7, diamond</b>. You can find everything about Sho and Haruto’s first meeting there.</span>', // msg in en
    '<span class="t_jp">この答えもbi-colorシリーズの1st、vol.7 diamondで知ることができます。翔と悠人の初対面時のことは大体これでわかるらしい。凄いな……</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 4, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">….I was the one who guessed it?! Oh wait… was the plant Benjamin? I’m not sure but if it’s Benjamin then the answer might be conchiglie…?</span>', // msg in en
    '<span class="t_jp">これ俺に関する問題だよな！？なんだっけな……あの時持ってたのベンジャミンだから……それならコンキリエか……？</span>', // msg in jp
    -1, // id msg sebelumnya
    5, // id msg berikutnya
  ],
  [ 5, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">How can you not remember that clearly?! It was in his CD with you, <b>Bi-Color Season 1 Vol. 8 sapphire</b>!</span>', // msg in en
    '<span class="t_jp">なんで自分のことなのにそんなに曖昧なんだ……！？悠人とお前のCD、bi-colorシリーズの1st、vol.8 sapphireの内容だぞ</span>', // msg in jp
    4, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 6, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">Oh I remember this one. Nah, it wasn’t a ninja. He got a role in medical drama and he said...</span>', // msg in en
    '<span class="t_jp">あ〜これは覚えてる。忍者ではななったな。てか忍者だったら怖いわ。確か医療ドラマの役を貰ったとかで……</span>', // msg in jp
    -1, // id msg sebelumnya
    7, // id msg berikutnya
  ],
  [ 7, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">...the character “likes teasing people but hides his real feeling underneath”, just like me… 💢 </span>', // msg in en
    '<span class="t_jp">｢人をからかうのが好きだけど本音を隠す天邪鬼タイプ｣だったっけか。悠人のやつあの時それが俺にそのものとか言ってたな</span>', // msg in jp
    6, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 8, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Hmm, you can check <b>Bi-Color Season 1 Vol. 8 sapphire</b> to be sure. I won’t suggest trusting Reiji.</span>', // msg in en
    '<span class="t_jp">ふむ、そうなのか……まあ玲司はあまり信用ならないので……皆さんは念の為、bi-colorシリーズの1st、vol.8 sapphireで確認してみてください</span>', // msg in jp
    -1, // id msg sebelumnya
    9, // id msg berikutnya
  ],
  [ 9, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">OI</span>', // msg in en
    '<span class="t_jp">おい</span>', // msg in jp
    8, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 10, // indeks message
    4, // Siapa yg ngomong 
    '<span class="t_en">Me, it was me! I remember at that time I was very confused by his way of introducing himself.</span>', // msg in en
    '<span class="t_jp">俺俺！俺だよ〜〜〜〜〜☆<br>あの時はハルくんの自己紹介が独特でちょ〜〜〜</span>', // msg in jp
    -1, // id msg sebelumnya
    11, // id msg berikutnya
  ],
  [ 11, // indeks message
    4, // Siapa yg ngomong 
    '<span class="t_en">But now I know he’s just being the usual Haru-kun~</span>', // msg in en
    '<span class="t_jp">っと戸惑ったけど、今はそれがハルくんなんだな〜って理解してます！(笑)</span>', // msg in jp
    10, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 12, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Please listen to <b>ROCK DOWN Vol 1. -Shidou-</b> if you would like to know more about the answer. A lot happened even in our first meeting, huh…</span>', // msg in en
    '<span class="t_jp">この内容はROCKDOWN vol.1ｰ始動ｰで知ることができます。是非聴いてみてくださいね。…………初対面でも本当に…色々なことがあったな……</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 13, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">It was Yasashii Sekai~</span>', // msg in en
    '<span class="t_jp">正解は優しい世界です♪</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 14, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Since Sho isn’t like Reiji, you can take his words for it. But to be sure, I suggest you check <b>ROCK DOWN Vol 1 -Shidou-</b> still.</span>', // msg in en
    '<span class="t_jp">誰かさんと違って翔の言葉は信用できるからな。……この時のこともROCKDOWN vol.1ｰ始動ｰで聴くことができるので、良ければ</span>', // msg in jp
    -1, // id msg sebelumnya
    15, // id msg berikutnya
  ],
  [ 15, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">WHY ME AGAIN?!</span>', // msg in en
    '<span class="t_jp">お前今日なんか俺に棘がねえ？</span>', // msg in jp
    14, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 16, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">Me and Ayumu answered the quizzes, so not that one~</span>', // msg in en
    '<span class="t_jp">僕と歩がクイズに答えていたからそこじゃないのは確かだね</span>', // msg in jp
    -1, // id msg sebelumnya
    17, // id msg berikutnya
  ],
  [ 17, // indeks message
    4, // Siapa yg ngomong 
    '<span class="t_en"> I caught the balls with Gaku!</span>', // msg in en
    '<span class="t_jp">俺はがっくんとボールキャッチする役してたよ〜☆</span>', // msg in jp
    16, // id msg sebelumnya
    18, // id msg berikutnya
  ],
  [ 18, // indeks message
    3, // Siapa yg ngomong 
    '<span class="t_en">Oh, Haruto and Reiji were in charge of throwing the balls in that game.</span>', // msg in en
    '<span class="t_jp">そうだな、ルゥ。あの時は確か悠人と玲司がボールを投げる役だったよな</span>', // msg in jp
    17, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 19, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">I guess the answer is obvious. But if you want to know more about this game, you can try listening to <b>ROCK DOWN Vol 2 - The adventure begins here -</b></span>', // msg in en
    '<span class="t_jp">答えは決まりだな。この番組の内容はROCK DOWN vol.2　-The adventure begins here.-で聴くことができるので是非チェックしてみてください</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 20, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">Ahaha, the bakery one was for Germany!</span>', // msg in en
    '<span class="t_jp">あはは、あれはドイツの話だったね</span>', // msg in jp
    -1, // id msg sebelumnya
    21, // id msg berikutnya
  ],
  [ 21, // indeks message
    3, // Siapa yg ngomong 
    '<span class="t_en">Just what did you two talk about…?</span>', // msg in en
    '<span class="t_jp">2人は何を話していたんだ……？</span>', // msg in jp
    20, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 22, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">This one was in <b>ROCK DOWN Vol 2 - The adventure begins here -</b>.</span>', // msg in en
    '<span class="t_jp">この話も、ROCK DOWN vol.2　-The adventure begins here.-で聴くことができます。</span>', // msg in jp
    -1, // id msg sebelumnya
    23, // id msg berikutnya
  ],
  [ 23, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">But...overseas trip, huh? It might be fun if it’s with everyone...</span>', // msg in en
    '<span class="t_jp">それにしても、海外旅行か……皆と一緒なら、楽しいだろうな</span>', // msg in jp
    22, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 24, // indeks message
    3, // Siapa yg ngomong 
    '<span class="t_en">I was in charge of Rock and Sho was of Vazz, sooo~ Haru-kun was the shower general!</span>', // msg in en
    '<span class="t_jp">俺がロックの担当、で翔くんがバズの担当！ハルくんはず〜〜〜〜っとシャワー大将でした！(笑)</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 25, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Shower general… Ahem, this one was in <b>Color Series [-Red-] - Paint the Town Red.</b></span>', // msg in en
    '<span class="t_jp">シャワー大将…………。この内容はカラーシリーズのRed-Paint the Town Red-で聴くことができます。</span>', // msg in jp
    -1, // id msg sebelumnya
    26, // id msg berikutnya
  ],
  [ 26, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">The title might seem...scary, but don’t worry, the drama was very cute (and fluffy)</span>', // msg in en
    '<span class="t_jp">そタイトルからして怖い印象を受けるかもしれませんが……中身はふわふわなのでご安心を</span>', // msg in jp
    25, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 27, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">Oh I remember, he mentioned that the other method is quicker but it used super glue.</span>', // msg in en
    '<span class="t_jp">瞬間接着剤を使えば早くできるけれど、</span>', // msg in jp
    -1, // id msg sebelumnya
    28, // id msg berikutnya
  ],
  [ 28, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">A mug will come in contact with the mouth, so it’s not really safe to use such material.</span>', // msg in en
    '<span class="t_jp">マグカップは口に触れるものだからそういう素材を使うのはあまり安全ではないと言っていたね</span>', // msg in jp
    27, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 29, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Haruto is quite knowledgeable about kintsugi, huh… Ah yes, this one was in <b>Color Series [-Red-] - Paint the Town Red.</b></span>', // msg in en
    '<span class="t_jp">詳しいな、悠人……。これも、カラーシリーズのRed-Paint the Town Red-で聴くことができます。</span>', // msg in jp
    -1, // id msg sebelumnya
    30, // id msg berikutnya
  ],
  [ 30, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">They made a chaos, but...well, the way they handle things was good so…</span>', // msg in en
    '<span class="t_jp">何やら混沌としていたらしいが……対処方法は鮮やかだったんだな……</span>', // msg in jp
    29, // id msg sebelumnya
    31, // id msg berikutnya
  ],
  [ 31, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">He loves the figurine decorations lol</span>', // msg in en
    '<span class="t_jp">あいつフィギュアの装飾とか好きらしいしな〜(笑)</span>', // msg in jp
    30, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 32, // indeks message
    3, // Siapa yg ngomong 
    '<span class="t_en">Oh, it should be onion. I think he asked me to teach him how to chop onions correctly afterwards… Wait, did he?</span>', // msg in en
    '<span class="t_jp">これは玉ねぎだな。この後悠人から玉ねぎの正しい切り方を聞かれた覚えがある。……この時はどうしてたんだろうな…</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 33, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">For Haruto and Ouka’s interaction, you can check <b>Bi-Color Season 2 Vol. 3 - Pearl x Sapphire.</b></span>', // msg in en
    '<span class="t_jp">こ、このやり取りはbi-colorシリーズの2nd、Vol. 3 -Pearl x Sapphire-</span>', // msg in jp
    -1, // id msg sebelumnya
    34, // id msg berikutnya
  ],
  [ 34, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">I was worried about their cooking, but it turned out good so...</span>', // msg in en
    '<span class="t_jp">で知ることができます！おいしくできた、と聞いているが……心配になるな…</span>', // msg in jp
    33, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 35, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">Oh, Issa told me about this one. This guy actually said that...</span>', // msg in en
    '<span class="t_jp">あ〜これ俺一紗から聞いたわ。</span>', // msg in jp
    -1, // id msg sebelumnya
    36, // id msg berikutnya
  ],
  [ 36, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">...being compared to a baby horse is an honor because it’s an elegant animal.</span>', // msg in en
    '<span class="t_jp">優雅でわびさびのある動物だから名誉なことです、とか言ってたな、確か…</span>', // msg in jp
    35, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 37, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">It’s really hard to understand you guys sometimes… But anyway, if it’s Haruto and Issa...</span>', // msg in en
    '<span class="t_jp">時々本当に悠人のことがわからなくなるな……。</span>', // msg in jp
    -1, // id msg sebelumnya
    38, // id msg berikutnya
  ],
  [ 38, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">...then it should be in Bi Color Season 2 Vol. 4 - Sapphire x Ruby. Be sure to check it out.</span>', // msg in en
    '<span class="t_jp">このやり取りは、bi-colorシリーズの2nd、Vol. 4 -Sapphire x Ruby-で聴くことができます。</span>', // msg in jp
    37, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 39, // indeks message
    4, // Siapa yg ngomong 
    '<span class="t_en">We ate dinner made by Gakkun at night, so we didn’t go to the hot pot restaurant of course!</span>', // msg in en
    '<span class="t_jp">夜はがっくんが作ってくれたご飯を食べたから外食はしなかったよ！</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 40, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">The outing sounds fun…</span>', // msg in en
    '<span class="t_jp">ルカや悠人と出かけるのは楽しそうだな……。</span>', // msg in jp
    -1, // id msg sebelumnya
    41, // id msg berikutnya
  ],
  [ 41, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Oh, yes, this one was in <b>Bi-Color Season 3 Vol. 3 - Sapphire x Morganite.</b></span>', // msg in en
    '<span class="t_jp">この内容はbi-colorシリーズの3rd、Vol. 3 -Sapphire x Morganite-で聴けますので、チェックしてみてください</span>', // msg in jp
    40, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 42, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">She’s a nurse~</b></span>', // msg in en
    '<span class="t_jp">悠人のお姉さんは看護師さんだよね</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 43, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">I shouldn’t even be surprised that Sho knows, huh...  Haruto and Futaba’s outing was in...</b></span>', // msg in en
    '<span class="t_jp">流石に翔は詳しいな。この内容はbi-colorシリーズの3rd、Vol. 3 -Topaz x Sapphire-で聴くことができます。</span>', // msg in jp
    -1, // id msg sebelumnya
    44, // id msg berikutnya
  ],
  [ 44, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">...Bi Color Season 3 Vol. 5 - Topaz x Sapphire. Haruto’s trick to ask Futaba out for the outing was interesting. </b></span>', // msg in en
    '<span class="t_jp">是非。……それにしても、悠人が二葉を誘うのに使った方法は面白かったな</span>', // msg in jp
    43, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 45, // indeks message
    3, // Siapa yg ngomong 
    '<span class="t_en">Ah, no. In fact, he said that he hardly got any offers for acting, despite wanting to try it out.</span>', // msg in en
    '<span class="t_jp">これは……×だな。寧ろ、演技にチャレンジしてみたいのに中々オファーが来ないって言ってた。</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 46, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">So he wants to try acting? This is news to me… Ah yes, apparently this one was in Play of Color Vol. 3 - “Let’s talk about the future together.” </span>', // msg in en
    '<span class="t_jp">色々なことにチャレンジしようとする姿勢は凄いな。見習いたい。 この内容はPlay of ColorシリーズのVol.3 、</span>', // msg in jp
    -1, // id msg sebelumnya
    47, // id msg berikutnya
  ],
  [ 47, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">It’s a good Drama CD if you want to know about their worries and their plan to handle those.</span>', // msg in en
    '<span class="t_jp">｢いつかの話を君としよう｣に収録されています、3人の悩みや対策を知りたい方にはオススメです</span>', // msg in jp
    46, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 48, // indeks message
    4, // Siapa yg ngomong 
    '<span class="t_en">Oh, I remember this one! There really was nobody behind me, you know?!</span>', // msg in en
    '<span class="t_jp">あー！！これ覚えてる！！俺の後ろ、本当に誰もいなくて超怖かったんだからね！？</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 49, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">It--it sounds scary! Ah, you can find it here → <a href="https://twitter.com/vazzrock_info/status/1016558122251325441">[Twitter]</a></span>', // msg in en
    '<span class="t_jp">そ、それは怖そうだ……。この時のことだな…… → <a href="https://twitter.com/vazzrock_info/status/1016558122251325441">[Twitter]</a></span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 50, // indeks message
    3, // Siapa yg ngomong 
    '<span class="t_en">It was Shu-san! We talked a lot about cooking.</span>', // msg in en
    '<span class="t_jp">これは柊羽さんだな！料理の話で盛り上がった</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 51, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">So there was a hammock too there? Now I want to try... You can find it in this tweet → <a href="https://twitter.com/vazzrock_info/status/1025734141499731971">[Twitter]</a></span>', // msg in en
    '<span class="t_jp">屋上にはハンモックもあるんだな、いつか乗ってみたい → <a href="https://twitter.com/vazzrock_info/status/1025734141499731971">[Twitter]</a></span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 52, // indeks message
    1, // Siapa yg ngomong 
    '<span class="t_en">Well, he...loves lemon, yeah. You can see it here → <a href="https://twitter.com/vazzrock_info/status/1037324621324804102">[Twitter]</a></span>', // msg in en
    '<span class="t_jp">レモンだっけ？俺も知った時驚いたわー。あ、情報源ここな → <a href="https://twitter.com/vazzrock_info/status/1037324621324804102">[Twitter]</a></span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 53, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">...</span>', // msg in en
    '<span class="t_jp">...</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 54, // indeks message
    0, // Siapa yg ngomong 
    '<span class="t_en">It was Santa Claus (chuckles) that’s so cute...</span>', // msg in en
    '<span class="t_jp">これは…サンタクロース、だよね。かわいいなあ</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 55, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">Well, I can’t blame him for thinking that way considering this particular figure...</a></span>', // msg in en
    '<span class="t_jp">煙突から侵入してくるという点ではそう思われても仕方がない…</span>', // msg in jp
    -1, // id msg sebelumnya
    56, // id msg berikutnya
  ],
  [ 56, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">...enters a house throught he chimney. The conversation can be found here → <a href="https://twitter.com/vazzrock_info/status/1161611860157722624">[Twitter]</a></span>', // msg in en
    '<span class="t_jp">…のか？ → <a href="https://twitter.com/vazzrock_info/status/1161611860157722624">[Twitter]</a></span>', // msg in jp
    55, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 57, // indeks message
    4, // Siapa yg ngomong 
    '<span class="t_en">Haha, it’s [Telegram]! But that kind of easy-to-read sentences is fun to read, y’know!</span>', // msg in en
    '<span class="t_jp">俺これわかるよ！電報！でも電報みたいな文章って面白くて良いよね〜☆</span>', // msg in jp
    -1, // id msg sebelumnya
    -1, // id msg berikutnya
  ],
  [ 58, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">True, sometimes you just don’t have the energy to guess the hidden meanings…</span>', // msg in en
    '<span class="t_jp">確かに、あまり長いと意図を読むのに苦労する時もあるだろうから……</a></span>', // msg in jp
    -1, // id msg sebelumnya
    59, // id msg berikutnya
  ],
  [ 59, // indeks message
    2, // Siapa yg ngomong 
    '<span class="t_en">I also want to keep my words easy to understand.</span>', // msg in en
    '<span class="t_jp">俺もわかりやすい文章を心がけたい  </span>', // msg in jp
    58, // id msg sebelumnya
    60, // id msg berikutnya
  ],
  [ 60, // indeks message
    4, // Siapa yg ngomong 
    '<span class="t_en">I think you’re doing fine already, Ayumu! (<a href="https://twitter.com/vazzrock_info/status/1111997523739074560">[Twitter]</a>)</span>', // msg in en
    '<span class="t_jp">歩くんは今のままで良いと思うよ！ (<a href="https://twitter.com/vazzrock_info/status/1111997523739074560">[Twitter]</a>)</span>', // msg in jp
    59, // id msg sebelumnya
    -1, // id msg berikutnya
  ]
];

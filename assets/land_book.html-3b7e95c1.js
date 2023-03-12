import{_ as l,M as s,p as c,q as o,R as e,N as t,V as d,t as a,a1 as r}from"./framework-5866ffd3.js";const h={},m=r(`<h1 id="領地グループの本" tabindex="-1"><a class="header-anchor" href="#領地グループの本" aria-hidden="true">#</a> 領地グループの本</h1><p>自分の家財道具を守り、泥棒から身を守ってください。クリーパーの爆発にも耐えます～とても優れています～ 無限の<a href="land_block.md">領地ジェネレーター</a>をバインドすることができます！ モンスターは保護されず、領地内で生まれた動物だけが保護されます。</p><h2 id="データ" tabindex="-1"><a class="header-anchor" href="#データ" aria-hidden="true">#</a> データ</h2><table><tr><td align="center">未使用</td><td align="center">使用済み</td></tr><tr><td><table><tr><td align="end">画像</td><td><img src="https://i.imgur.com/Vj4LxUG.png" width="128"></td></tr><tr><td align="end">スタック</td><td>64</td></tr><tr><td align="end">エンチャント</td><td>なし</td></tr></table></td><td><table><tr><td align="end">画像</td><td><img src="https://i.imgur.com/duGvD3y.png" width="128"></td></tr><tr><td align="end">スタック</td><td>1</td></tr><tr><td align="end">エンチャント</td><td>なし</td></tr></table></td></tr></table><hr><h2 id="クラフト" tabindex="-1"><a class="header-anchor" href="#クラフト" aria-hidden="true">#</a> クラフト</h2><table><tr><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td colspan="3"></td></tr><tr><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td><img src="https://i.imgur.com/Oqe8FMm.png" width="48"></td><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td width="70" align="center"><img src="https://i.imgur.com/VE0KqIE.png" width="40"></td><td><img src="https://i.imgur.com/Vj4LxUG.png" width="48"></td><td width="70"></td></tr><tr><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td><img src="https://i.imgur.com/hK44ttL.png" width="48"></td><td colspan="3"></td></tr></table><hr><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><h3 id="新しいものを作る" tabindex="-1"><a class="header-anchor" href="#新しいものを作る" aria-hidden="true">#</a> 新しいものを作る</h3><p>未起動の領地グループの本を持って右クリックすると、起動済みの領地グループの本になります。</p><h3 id="領地を生成する" tabindex="-1"><a class="header-anchor" href="#領地を生成する" aria-hidden="true">#</a> 領地を生成する</h3><p>起動済みの<a href="land_block.md">領地ジェネレーター</a>を持って右クリックすることで、領地を書き込むことができます。</p><table><tr><td align="center">未書き込み</td><td align="center">書き込み済み</td></tr><tr><td><img src="https://i.imgur.com/x9meQTF.png" width="400"></td><td><img src="https://i.imgur.com/h2Kovir.png" width="400"></td></tr></table><p>もし領地発生装置（land_block.md）がすでに書き込まれている場合は、再使用する前に取り除く必要があります。領地の配置方法は、烽火台（https://minecraft.fandom.com/ja/wiki/ビーコン</p><img src="https://i.imgur.com/nW7GC4b.png" width="720"><p>頂部ブロックは領地発生装置（land_block.md）です。 下4層は領地小エネルギー、領地中エネルギー、領地大エネルギー（land_energy.md）を混在させることができます。 4層まで埋まっている場合、追加で+20%のエネルギーポイントを獲得します。エネルギーポイントの変換式：</p><table><tr><td align="center">エネルギー</td><td align="center">ポイント</td></tr><tr><td align="center">小</td><td align="center">1</td></tr><tr><td align="center">中</td><td align="center">9</td></tr><tr><td align="center">大</td><td align="center">81</td></tr></table><table><tr><td align="center">4層未満</td><td><code>ブロック半径</code>=切り上げ(平方根(<code>総ポイント数</code>)/<code>2</code>)-<code>1</code></td></tr><tr><td align="center">4層まで埋まっている</td><td><code>ブロック半径</code>=切り上げ(平方根(<code>総ポイント数</code>x<code>1.2</code>)/<code>2</code>)-<code>1</code></td></tr></table><p>実際の面積は、<code>総ブロック面積</code>=平方(<code>ブロック半径</code>+<code>1</code>+<code>ブロック半径</code>)です。 自分よりも早く領地を占めたプレイヤーの領地を上書きすることはできません。：</p><table><tr><td><img src="https://i.imgur.com/THNRtuf.png" width="400"></td><td><img src="https://i.imgur.com/C4waK6f.png" width="400"></td></tr></table><h3 id="領地を獲得する" tabindex="-1"><a class="header-anchor" href="#領地を獲得する" aria-hidden="true">#</a> 領地を獲得する</h3><p>有効になっている領地グループの本を誤って紛失した場合でも、取り戻す方法があります。 アクティブでない領地グループの書を持って、領地ブロック (land_block.md) を右クリックすると、書に書かれている領地グループを復元できます。</p><h3 id="名前を変更する" tabindex="-1"><a class="header-anchor" href="#名前を変更する" aria-hidden="true">#</a> 名前を変更する</h3><p>アクティブな領地グループの書を鉄砧 (https://minecraft.fandom.com/ja/wiki/金床) でクリックして、名前を変更することができます。領地グループの名前も変更されます。 最大36文字まで入力できます。 一部の変更は、キャッシュの仕組みにより、30秒以上かかる場合があります。</p><h3 id="グループの書" tabindex="-1"><a class="header-anchor" href="#グループの書" aria-hidden="true">#</a> グループの書</h3><p>1ページ目と2ページ目は説明で、3ページ目以降には「ALL」と「#権限」の権限リストが表示されます。フォーマットは「プレイヤー=権限リスト」となっています。 プレイヤーはニックネームまたは名前で指定できますが、編集後にはすべて自動的にニックネームに変換されます。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>最大200人まで許容されます。
<span class="token comment">#フォーマット:</span>
プレイヤー名=権限リスト
<span class="token comment">#権限:</span>
<span class="token comment">#  A アーマースタンド</span>
<span class="token comment">#  B ボート</span>
<span class="token comment">#  D ブロック破壊</span>
<span class="token comment">#  E エンティティのインタラクション</span>
<span class="token comment">#  F アイテムフレーム</span>
<span class="token comment">#  G 絵画</span>
<span class="token comment">#  H エンティティへのダメージ</span>
<span class="token comment">#  I ブロックのインタラクション</span>
<span class="token comment">#  L 講義ノートの読み込み</span>
<span class="token comment">#  M マインカート</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#  P ブロックの設置</span>
<span class="token comment">#  R オーナー</span>
<span class="token comment">#  S 生成されたエンティティ</span>
<span class="token comment">#  T トリガー</span>
<span class="token comment">#  U バケツ</span>
<span class="token comment">#  V PVP</span>
<span class="token comment">#  Y 飛行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>(ALL)=
あなたのプレイヤー名=ABDEFGHILMPRSTUVY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>全プレイヤーの飛行を可能にする：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>(ALL)=Y
あなたのプレイヤー名=ABDEFGHILMPRSTUVY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>I_PLAYER プレイヤーにすべての権限を与える：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>(ALL)=
あなたのプレイヤー名=ABDEFGHILMPRSTUVY
I_PLAYER=ABDEFGHILMPRSTUVY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各行の最初の文字が <code>#</code> の場合、コメントであり内容には影響しない 下の行をコメントアウトすると、更新後にこの行は自動的に消えます</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>(ALL)=A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),p={href:"https://minecraft.fandom.com/ja/wiki/%E9%98%B2%E5%85%B7%E7%AB%8B%E3%81%A6",target:"_blank",rel:"noopener noreferrer"},u=r(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#(ALL)=A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),_={href:"https://minecraft.fandom.com/ja/wiki/%E3%83%9C%E3%83%BC%E3%83%88",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),f=e("h2",{id:"権限",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#権限","aria-hidden":"true"},"#"),a(" 権限")],-1),b=e("h3",{id:"a-アーマースタンド",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-アーマースタンド","aria-hidden":"true"},"#"),a(" A アーマースタンド")],-1),v={href:"https://minecraft.fandom.com/ja/wiki/%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"b-ボート",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#b-ボート","aria-hidden":"true"},"#"),a(" B ボート")],-1),w={href:"https://minecraft.fandom.com/ja/wiki/%E5%8B%95%E7%89%A9",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"d-ブロック破壊",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#d-ブロック破壊","aria-hidden":"true"},"#"),a(" D ブロック破壊")],-1),E={href:"https://minecraft.fandom.com/ja/wiki/%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"e-エンティティのインタラクション",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#e-エンティティのインタラクション","aria-hidden":"true"},"#"),a(" E エンティティのインタラクション")],-1),L={href:"https://minecraft.fandom.com/ja/wiki/%E7%B5%B5%E7%94%BB",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"f-アイテムフレーム",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#f-アイテムフレーム","aria-hidden":"true"},"#"),a(" F アイテムフレーム")],-1),A={href:"https://minecraft.fandom.com/ja/wiki/%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,[e("h3",{id:"g-絵画",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#g-絵画","aria-hidden":"true"},"#"),a(" G 絵画")]),a(" 領地内で誕生した動物だけを保護する")],-1),V=e("li",null,[e("h3",{id:"h-エンティティへのダメージ",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#h-エンティティへのダメージ","aria-hidden":"true"},"#"),a(" H エンティティへのダメージ")]),a(" ? ※ ?")],-1),P=e("h3",{id:"i-ブロックのインタラクション",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-ブロックのインタラクション","aria-hidden":"true"},"#"),a(" I ブロックのインタラクション")],-1),R={href:"https://minecraft.fandom.com/ja/wiki/%E3%83%81%E3%82%A7%E3%82%B9%E3%83%88",target:"_blank",rel:"noopener noreferrer"},I=r('<li><h3 id="l-講義ノートの読み込み" tabindex="-1"><a class="header-anchor" href="#l-講義ノートの読み込み" aria-hidden="true">#</a> L 講義ノートの読み込み</h3> [ 講壇 ] (https://minecraft.fandom.com/ja/wiki/講義台) の閲覧</li><li><h3 id="m-マインカート" tabindex="-1"><a class="header-anchor" href="#m-マインカート" aria-hidden="true">#</a> M マインカート</h3> [ マインカート ] (https://minecraft.fandom.com/ja/wiki/マインカート) の設置、ダメージ、乗車</li><li><h3 id="p-ブロックの設置" tabindex="-1"><a class="header-anchor" href="#p-ブロックの設置" aria-hidden="true">#</a> P ブロックの設置</h3> [ ブロック ] (https://minecraft.fandom.com/ja/wiki/ブロック) の設置</li><li><h3 id="r-オーナー" tabindex="-1"><a class="header-anchor" href="#r-オーナー" aria-hidden="true">#</a> R オーナー</h3> [ 領地生成機 ] (land_block.md) の書き込み、解除 領地権限の変更 領地エネルギーの設置、解除</li><li><h3 id="s-生成されたエンティティ" tabindex="-1"><a class="header-anchor" href="#s-生成されたエンティティ" aria-hidden="true">#</a> S 生成されたエンティティ</h3> [ スポーンエッグ ] (https://minecraft.fandom.com/ja/wiki/スポーンエッグ) の使用 [ 友好的な生物の収納ロープ ] (rope.md) の使用 [ 敵対的な生物の収納ロープ ] (rope.md) の使用</li><li><h3 id="t-トリガー" tabindex="-1"><a class="header-anchor" href="#t-トリガー" aria-hidden="true">#</a> T トリガー</h3> [ フックショット ] (https://minecraft.fandom.com/ja/wiki/フックショット) の発動 [ トラップチェスト ] (https://minecraft.fandom.com/ja/wiki/トラップチェスト) の使用 [ プレッシャープレート ] (https://minecraft.fandom.com/ja/wiki/プレッシャープレート) の発動</li><li><h3 id="u-バケツ" tabindex="-1"><a class="header-anchor" href="#u-バケツ" aria-hidden="true">#</a> U バケツ</h3> [ 水バケツ ] (https://minecraft.fandom.com/ja/wiki/水バケツ) の使用 [ 溶岩バケツ ] (https://minecraft.fandom.com/ja/wiki/溶岩バケツ) の使用</li><li><h3 id="v-pvp" tabindex="-1"><a class="header-anchor" href="#v-pvp" aria-hidden="true">#</a> V PVP</h3> [ プレイヤー ] (https://minecraft.fandom.com/ja/wiki/プレイヤー) のダメージ</li>',8),K=e("h3",{id:"y-飛行",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#y-飛行","aria-hidden":"true"},"#"),a(" Y 飛行")],-1),G=e("hr",null,null,-1),F=e("h2",{id:"アクティブ",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#アクティブ","aria-hidden":"true"},"#"),a(" アクティブ")],-1),T=e("p",null,"以下の行動でアクティブ度が上昇します：",-1),Y=e("li",null,[a("実体取引、毎回+"),e("code",null,"100")],-1),C=e("li",null,[a("ブロック破壊、ブロック設置、ブロック更新、毎回+"),e("code",null,"40")],-1),D=e("li",null,[a("アイテム拾い、アイテム捨て、容器取得、容器収納、毎回+"),e("code",null,"20")],-1),M=e("li",null,[a("実体ダメージ、毎回+"),e("code",null,"10")],-1),U=e("code",null,"4",-1),H=e("li",null,[a("プレイヤー存在、毎秒+"),e("code",null,"1")],-1),S=e("code",null,"200,000",-1),N=e("code",null,"5,000",-1),q=e("code",null,"1",-1),O=e("code",null,"20",-1),Q=r("<p>アクティブな領地産生器が指し示されると、0~999%のアクティブ度の参考が表示されます。 公式=最小値(<code>999</code>,切り捨て(<code>現在の総活性度</code>/((<code>現在時刻</code>-<code>前回のチェックまたは作成時刻</code>)/<code>6ヶ月時間</code>)/<code>5000.0</code>/<code>現在の総エネルギーポイント数</code>x<code>100.0</code>)) 通常、<code>100</code>%以上の場合、安全で損傷はありません。</p>",1);function W(z,J){const n=s("RouterLink"),i=s("ExternalLinkIcon");return c(),o("div",null,[e("p",null,[t(n,{to:"/ja_jp/"},{default:d(()=>[a("← ホームに戻る")]),_:1})]),m,e("p",null,[e("a",p,[a("防具立て"),t(i)]),a("の設置、ダメージ、装備")]),u,e("p",null,[e("a",_,[a("ボート"),t(i)]),a("の設置、ダメージ、乗る")]),g,f,e("ul",null,[e("li",null,[b,e("a",v,[a("ブロック"),t(i)]),a("の破壊")]),e("li",null,[k,e("a",w,[a("エンティティ"),t(i)]),a("の餌付け")]),e("li",null,[x,e("a",E,[a("アイテムフレーム"),t(i)]),a("の設置、ダメージ、アイテムの変更、回転")]),e("li",null,[j,e("a",L,[a("絵画"),t(i)]),a("の設置、ダメージ")]),e("li",null,[y,e("a",A,[a("エンティティ"),t(i)]),a("のダメージ")]),B,V,e("li",null,[P,e("a",R,[a("チェスト"),t(i)]),a("の使用 [ 烽火台 ] (https://minecraft.fandom.com/ja/wiki/ビーコン) の使用 [ 看板 ] (https://minecraft.fandom.com/ja/wiki/看板) の変更 [ ノートブロック ] (https://minecraft.fandom.com/ja/wiki/ノートブロック) の調整")]),I,e("li",null,[K,a(" [ 領地フライングデバイス ] (land_flying_device.md) の飛行 "),t(n,{to:"/ja_jp/feature/cat_bowl.html"},{default:d(()=>[a("猫饲料")]),_:1}),a("の切り替え観察者 "),t(n,{to:"/ja_jp/feature/cat_bowl.html"},{default:d(()=>[a("猫饲料")]),_:1}),a("の磁石によるアイテム吸引")])]),G,F,T,e("ul",null,[Y,C,D,M,e("li",null,[t(n,{to:"/ja_jp/feature/cat_bowl.html"},{default:d(()=>[a("猫饲料")]),_:1}),a("プレイヤー存在、毎秒+"),U]),H]),e("p",null,[a("各区画のアクティブ度上限は"),S,a("であり、土地内のアクティブ度が毎"),N,a("ごとに"),q,a("ポイントを保持できます"),t(n,{to:"/ja_jp/item/land_energy.html"},{default:d(()=>[a("領地エネルギー")]),_:1}),a("。 12ヶ月ごとに、保持できる"),t(n,{to:"/ja_jp/item/land_energy.html"},{default:d(()=>[a("領地エネルギー")]),_:1}),a("ポイントが検証されます。全体の"),O,a("%未満であれば、全てが破壊されます。それ以外の場合、次のことが起こります：")]),e("ul",null,[e("li",null,[a("保持できなかった"),t(n,{to:"/ja_jp/item/land_energy.html"},{default:d(()=>[a("領地エネルギー")]),_:1}),a("は破壊されます。")]),e("li",null,[a("保持できる"),t(n,{to:"/ja_jp/item/land_energy.html"},{default:d(()=>[a("領地エネルギー")]),_:1}),a("がない場合、"),t(n,{to:"/ja_jp/item/land_block.html"},{default:d(()=>[a("領地産生器")]),_:1}),a("と共に破壊されます。")])]),Q])}const Z=l(h,[["render",W],["__file","land_book.html.vue"]]);export{Z as default};

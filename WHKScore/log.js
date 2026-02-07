// 科目配置列表 - 可以添加或减少科目
const subjects = [
    { id: 'chinese', name: '语文' },
    { id: 'math', name: '数学' },
    { id: 'english', name: '英语' },
    { id: 'physics', name: '物理' },
    { id: 'chemistry', name: '化学' },
    { id: 'biology', name: '生物' }
];

// 静态日志数据 - 所有日志内容需通过直接修改此处源代码进行更新
const logs = [
    {
        id: 1,
        title: '2025/12/24高三联考河南',
        date: '2025-12-24',
        evaluation: '<p>百师联盟的卷子有点偏怪，物理题出的是个史啊。这次语文作文没写完，但还是考了94，惊险！感谢批卷老师的慈悲之心，我作文打了38分。</p><iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113247785060530&bvid=BV1az4ceJEaL&cid=26135298344&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/b6a05977bb6469ef3ac1dc15e92e3d5c_2700357182182002029.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/8786bc9cef8c1c12504be8c039c88b84_5527057636689658014.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/873e2c67ee7d1dec67ee021880ed9f53_1697303412173868039.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/df5f619441c8195d49dc68e245614a80_8122169057967494422.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/17f1626614ae31fe32067ae6d6015d48_980502588474088098.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/49a3c8c465eb530e0204d247f8287a8b_73518930305145641.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/a23a7a368773d80608bc659b16259c7a_4101993624575736337.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/9093b2e9bf0a816a1c07b7cfa06d7652_5950425044771813916.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/e613fb41dddcec8e56901cb8622c4123_9191009360425896518.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/21a27935bb9bfc77e96656277b17c4c8_1692829348551497241.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/c800dc14fab24263ff7a66013fcebaf1_1182473180195651530.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/62779c3971b1a0b9c95107c643bb9741_120216286711265132.png'
                ]
            },
            'math': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/901de5ab8c3d1220f2c319d94b33846b_1827482064415317783.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/da17e47626bbc823b0bb1303f930cb06_767212949184394454.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/77a49a9e81271ae5a04d22be9a1b841f_2501617749270448449.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/281612a53d65c65ac8f3323cad9309ee_7023502628849809652.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/bcdb8716baa1df69c938806e71fb808d_6742398441947985814.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/87a61400eeaea00216085aa6b967026a_595904378859496290.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/32ca42814768a40eb1da58dab27a20d5_6100249173294460417.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/b8e01a379abb8ab61f28e2966ba54587_3488305954167665161.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/9e8ae0cdf2f6d44132b9d142f35a1792_5439925530784581980.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/39c6f9b294bf35560a8b0192fa769858_1232346784096325889.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/f188fc811863d6badffc2a5fa214d469_4329490177749976540.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/e3594609547457caafd0c0df509a9451_4637973277529597377.png'
                ]
            },
            'english': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/839f076f3d875bb8210cfe6fa0593fa0_2430124107512494256.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/62324bd505662e813770b0e0bf70b474_2878993092798613717.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/b9abee19ab382867806a2915e086c9d5_4794425538107076935.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/526abba753cc263e8bc172a356fe7150_4302880312821137761.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/4fd77d3ece09ce15498ba5a2980b17d2_5076180862411121895.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/63277095c3aceda60b85b1abd9e15060_5667290079079736916.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/5e16355c056ceae55d8f5e314c3a48c7_2961324164832035428.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/97a0e4a21908d5a008333b4d3abb6132_5100304831638976961.jpg'

                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/a14913838b410041d922b65aee4c9b6a_37958245729577325.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/7a21963535244fbc1e7d44c5bebc2252_6078574438122555154.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/41dc8b37c0905b4b4c43d059dbc19872_3618400271024549229.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/9bc44410196d727aee7e0b5bdca4fc36_8913346044005509701.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/01b10de8ad6f5b7fde83fffa9bc2e9c9_454151104173444918.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/343b0e8821759c91ad656b0df3055e8f_7954012591822189392.png'
                ]
            },
            'physics': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/9b4be723f6c3c0475f7681e7122aab95_2272368749478384982.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/adbbfab7139760ee61c3c6320bdde994_7851599878258082499.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/d426b2268d3188f4faccd8c877827c81_2529786871141822627.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/c750701dc79ffcc40bdf8f849d22e745_4463968024929517104.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/6d4122685247388a13ca92d506e6646b_7982130577296608545.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/8e5852ccb1d0e132cd453fb7bd486e36_3370162329081781132.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/f73f341b02ab6793db13784f35b3a663_3837296513798636353.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/eac2ae45db517b36cc5681fba1fc698b_7340066923957398245.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/6034abb4d3db0da2ceffb271be487b1d_6586315885694661422.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/941a829841c60526be77c1f9d677704e_7928647355086925830.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/203cb8837037eead09d43926bb4c5073_7435692257505775840.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/0b202727200fc6ae5a265e045a05edf2_6289177102633190133.png'
                ]
            },
            'chemistry': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/03fecb4a65cdddfa81be1398184bfdc8_3703131265978308849.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/f475d65fcc1cdc4975fb4dd005db4382_1816700135058627790.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/01a7a886a941efafc22c77e655ce4caa_8094553001472538094.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/c6e282d8dfa422d48e8ae740e39a81c6_8254584706905888818.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/8ff3a3171bad807eeb7f05367c3a149c_5804918625666480907.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/1e3d8acfd854fbcc01e39a09bea1c3d1_7947656082605739118.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/b977fca57cd4bca83b9edbcaa41f8783_8410744449642521400.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/449184704/fec75f5192653d7d72a43e7eb042f3de_4355771926572987692.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/c4cc90785676f56aab87d3f802f46f31_3809179147875333163.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/bec68a8aeb5057bd8705973fd102a63a_6930285007894705239.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/69babb2a64294c12e4ff3643ddb15530_5337445782172454311.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/f9bc6af14d4b136ff233c43b8e30ed45_6357623996429960195.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/e98093a2ca7b8337859b123a5789a1e3_347186700923797899.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/d3690110f5f15f32fa61e66fca6b764f_1067837488067001542.png'
                ]
            },
            'biology': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/a98e0c67ee8bcdac6925baf0cb63d29c_5955705175025947558.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/4ad2de9ef698876aa61897d7709dccdd_6553906602221672963.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/13ccff45ac3afdfbda8b3457b355480c_8808505076008675071.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/fbe4fb2721c6d583c0d9da31fd7ef52b_7863291626074415596.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/79eec1b3bfa5900eb2ab67b97ad1d205_6878235428829634693.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/8cb305dae497280b3a30f56363a16613_7284243795856424578.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/c10be2da0593063e287a80257fb7d12d_4952443200037419442.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/fef60f82f1e0a365df85bbb0fe7bdabd_238552580527385377.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/0aef4825923428fa83913e45c83e54a4_4574207267188940994.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/38d4f604e5ff0f30e29f2ec42309367b_3425687232485580003.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/59a448de1761168d270cb37ad7fc2214_1998071051400103011.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/5a33facea21c188b4b2961733cdda87e_3989893690182927075.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/521a8175f3e67883e704ee7fc5aded2c_6223850804481087246.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/018db8bc0f9cf9e7700f350b13e4d9e3_7041040309903149877.png',
                    'https://upload-bbs.miyoushe.com/upload/2025/12/27/319434684/f7c203ccb14f08c97e32e8b7d15f6d77_2946700468772519710.png'
                ]
            }
        }
    },
    {
        id: 2,
        title: '未命名',
        date: '2026-2-5',
        evaluation: '<p>考前1天感冒，头痛欲裂，但还是考完了。数学感觉状态良好。语文作文也是成功写满了，但是选择题错一半对一半。物理实在是错的太亏了，这个寒假要好好刷物理！化学和生物都差不多吧，希望赋分高一点。一般来说，第一天考的简单，那么第二天考的卷子肯定会很难，所以英语这次就很难啊，痛失估计得有30多分！</p><img style="width:200px" src="https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/a545cb9395d03493b34c798d2f4f42f3_826194632702822619.jpg"><p>那个，关于我上500这件事......</p><img style="width:200px" src="https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/3f6abc7b90650a8defc28c931c65786c_5818876088877116171.jpg">',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/2023036c26766370321282e738637afe_841549539276664844.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/a224012a7b3ca905a6ad5585c100ce1d_4653809479021817754.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/cf9fed5d95a7fb91d5260c42fb12ae72_4928552626836064669.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/005e5294ad948354928b8faf4108ad20_2717509641106520221.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/47e09853a1c429b86186585ce105bfbb_7663451470534441944.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/6fc54ca2a19c821482e474cf5d11c4a4_7422833143767159214.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/c246b7a2e141d83271ab0b452cbcd589_8843028366445555604.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/c0e3a7c10de7dda013036203603d388b_3467804807615218503.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/ccf01d82257d1601e7b2c600456f1898_7629484024897477817.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/a016e738006959f61567510bc6f0edad_1004156014653076632.jpg'
                ]
            },
            'math': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/851ba09d2bcf9d573501a078c634937e_8112485746171867254.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/be85e46c2b34c4e1050dcf113bef778c_3279830839764421519.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/7c3bd7deb2a71eeeb3652c5813e31b3b_1698573788349972801.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/3e3249ad6c311f2ae789e3097ef8a51d_2920395737864455267.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/32572609a351e5d7509814c44b538d89_2647457058955858843.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/f29d558369e0cb8a18849a3215e83658_1616787043203503096.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/dc27f1f28c1da883478ba8e2ec8e6b5d_3225124377826261912.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/b17d24abeab4dc3768f64c93b08555fc_5363480270943021975.jpg'
                ]
            },
            'english': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/70bd31e83ec024564aac65ff83074a2b_5211588093093112514.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/80737826b08932f3baaf370943074552_7274445816359296807.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/a018212dd10fa6f0fbef1b5122bab9f7_1202730606245361901.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/54106be9205343ce40dad6b1dc90df3d_8738388687791840310.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/ef26087ef02882670f9c7d27aafd084c_3390303811850667990.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/4f54b3a3e48215878a5ed78032ef4d3d_6629550324113995495.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/824add46cce48ae0cbfed49485d7681f_5709446907664073617.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/526ea984b9ab02b13565c68e23deb5f6_6236614213711897215.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/6152314f7cb6db579746be7a08bf7426_5387394283179237701.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/251d3c0a7b80ef139ca28f0c0750aa39_1818673453716998858.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/7578b6f47042ec0e17191bc903aaee02_7832275129670872626.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/38ab43b94511cc512544b482c13c1afd_6641104198519400838.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/712d18873ac170363d269842e611d22b_9151650386790195756.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/e63691768609553c3946959ce762731d_9034530243866185139.jpg'
                ]
            },
            'physics': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/f197e25e49c42020b60d655d10996b36_4969105803281645560.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/073146486d7ce4482f4b6e8ecbb5c907_6078776546303429918.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/57105cd824ecd100f448262b34a136b3_4103088680207258714.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/69aac4a7b00e6bf0208181f28d1ed4dc_7721611631619159593.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/5ba029cea74821c1c88c5fb58464ef3b_8041460555615695303.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/12451008f6e674b4bfaf2654c60cae39_3044033557020650752.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/3ce8d202258fcfde3e51f23ed4c32449_6630839143309532639.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/3e1be8dea8c522997ab73a2c6f1e5612_3602483082319919018.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/d2fa08faf3aa5a5906104a4342bafbd1_1035735185783245155.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/1e7813098b558f0db8329e192b6b4dab_2406954909734470839.jpg'
                ]
            },
            'chemistry': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/9c4f8b6f49da9229100f88420339d9b5_196001363674635621.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/ac6905678f73884330f240748f90e985_5686763554084131124.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/c82929226521b0643296e3d2b39fc843_9209209711969979543.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/67a5135332918498eb99dea2f6650493_7291474321059109124.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/e6295892d7e786a123dc1010b692f546_4329725849344629367.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/6b9111947afe32e3e2091306323d50a3_1446127739273782248.jpg'  
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/49124bfc413e2537d76a82adcba49bf5_1947282892211045170.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/0118a6412b5cc26d8a55c535cbfe0d44_1049044603074301119.jpg'
                ]
            },
            'biology': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/ecf14fb134c16111a204ae020e3c6cc1_3812377135382315801.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/a291059b71614bf080dd9f8eb0cc12de_3872195457126421178.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/aade40f3e8daefd8459ca0af0912526e_4167460322904437806.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/c76400740d2cef77ade05cc9afdd403e_2829485281492166499.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/a7ec4d8ca2badee8ad5936942ba63cea_7156665760415586739.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/449184704/6f58b0fdf05e5c263de1125d43960fae_3176321949774730363.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/728c615c7ad6023feb79eecc10be0055_5676918561306582832.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/02/07/198629752/1fecec97e40be60630b21a14af3d6ed1_5041615116877750100.jpg'
                ]
            }
        }
    }
];

// 页面加载完成后初始化日志
document.addEventListener('DOMContentLoaded', function() {
    // 生成日志列表
    const leftPane = document.getElementById('leftPane');
    // 按照id从大到小排序
    logs.sort((a, b) => b.id - a.id);
    logs.forEach(log => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        logItem.style.cssText = `
            padding: 12px;
            border: 1px solid #333;
            margin-bottom: 8px;
            cursor: pointer;
            border-radius: 4px;
            background-color: #2a2a2a;
            transition: all 0.3s ease;
        `;
        logItem.innerHTML = `
            <strong>${log.title}</strong><br>
            <small style="color: #888;">${log.date}</small>
        `;
        logItem.addEventListener('click', () => {
            showLogDetails(log);
            // 移除所有选中状态
            document.querySelectorAll('.log-item').forEach(item => {
                item.style.backgroundColor = '#2a2a2a';
                item.style.borderColor = '#333';
            });
            // 设置当前选中状态
            logItem.style.backgroundColor = '#3a3a3a';
            logItem.style.borderColor = '#555';
        });
        leftPane.appendChild(logItem);
    });
});

// 显示日志详情
function showLogDetails(log) {
    const logDetails = document.getElementById('logDetails');
    let html = `
        <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); max-width: 100%; box-sizing: border-box;">
            <div style="border-bottom: 2px solid #444; padding-bottom: 15px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 24px; color: #ffffff; font-weight: 600;">${log.title}</h3>
                <p style="color: #888; margin: 0; font-size: 14px;">
                    <span style="display: inline-block; padding: 3px 8px; background-color: #333; border-radius: 4px; margin-right: 10px;">
                        <i style="margin-right: 5px;">📅</i>日期: ${log.date}
                    </span>
                </p>
            </div>
            <div style="margin-bottom: 15px;">
                <h4 style="margin: 0 0 15px 0; font-size: 18px; color: #ffffff; font-weight: 500; display: flex; align-items: center;">
                    <i style="margin-right: 8px; color: #4CAF50;">⭐</i>考试评价
                </h4>
                <div style="background-color: #333; border-radius: 6px; padding: 15px; border-left: 4px solid #4CAF50;">
                    <div id="evaluationContent" style="color: #ffffff; line-height: 1.5; margin: 0;">${log.evaluation || '暂无评价'}</div>
                </div>
            </div>
            
            <!-- 科目图片部分 -->
            <div style="margin-bottom: 15px;">
                <h4 style="margin: 0 0 15px 0; font-size: 18px; color: #ffffff; font-weight: 500; display: flex; align-items: center;">
                    <i style="margin-right: 8px; color: #9C27B0;">📚</i>科目试卷与答案
                </h4>
                <div id="subjectContainer" style="background-color: #333; border-radius: 6px; padding: 15px; border-left: 4px solid #9C27B0;">
                    <div id="subjectList" style="display: flex; flex-direction: column; gap: 15px;"></div>
                </div>
            </div>
        </div>
    `;
    logDetails.innerHTML = html;
    
    // 加载科目列表
    loadSubjects(log);
}

// 加载科目列表函数
function loadSubjects(log) {
    const container = document.getElementById('subjectList');
    if (!container) return;
    
    let html = '';
    
    subjects.forEach(subject => {
        const subjectData = log.subjects && log.subjects[subject.id];
        if (subjectData) {
            const examCount = subjectData.examPapers ? subjectData.examPapers.length : 0;
            const answerCount = subjectData.answers ? subjectData.answers.length : 0;
            
            html += `
                <div style="background-color: #2a2a2a; border-radius: 6px; padding: 15px; border: 1px solid #444;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <h5 style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 600;">${subject.name}</h5>
                        <span style="color: #888; font-size: 12px;">试卷: ${examCount} | 答案: ${answerCount}</span>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        ${examCount > 0 ? `
                            <a href="image-viewer.html?subject=${encodeURIComponent(subject.name)}&type=exam&images=${encodeURIComponent(JSON.stringify(subjectData.examPapers))}" 
                               style="flex: 1; padding: 10px; background-color: #2196F3; color: white; text-decoration: none; border-radius: 4px; text-align: center; font-size: 14px; transition: background-color 0.2s ease;"
                               onmouseover="this.style.backgroundColor='#1976D2'"
                               onmouseout="this.style.backgroundColor='#2196F3'">
                                📄 查看试卷 (${examCount})
                            </a>
                        ` : ''}
                        ${answerCount > 0 ? `
                            <a href="image-viewer.html?subject=${encodeURIComponent(subject.name)}&type=answer&images=${encodeURIComponent(JSON.stringify(subjectData.answers))}" 
                               style="flex: 1; padding: 10px; background-color: #FF9800; color: white; text-decoration: none; border-radius: 4px; text-align: center; font-size: 14px; transition: background-color 0.2s ease;"
                               onmouseover="this.style.backgroundColor='#F57C00'"
                               onmouseout="this.style.backgroundColor='#FF9800'">
                                ✅ 查看答案 (${answerCount})
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    });
    
    if (html === '') {
        html = '<div style="text-align: center; color: #888; padding: 20px;">暂无科目数据</div>';
    }
    
    container.innerHTML = html;
}

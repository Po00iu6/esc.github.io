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
        title: '2026年2月期末考试',
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
    },
    {
        id: 3,
        title: '2026年3月8日周测',
        date: '2026-3-8',
        evaluation: '<p>又是倒数捏~</p>',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/2244654a27fd296a6f6134e9e80c2904_8159696239589264089.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/758b3fff546aebb6d243a6326bca717c_8384834598852854007.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/ec458f9f486de1ee3a6bdfda2a3b41f9_3444965482899376136.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/e209ea2169bf4f73a114a70447575139_2180555639820730616.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/66e2f0976d4305129d6557041f514785_1114782688818931522.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/a0cfb1317cc7eaf3691be83074c26632_8375026120264560075.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/49c091d4d719eecc99d0aec689a2030e_8102809485441356419.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/03b12c3225039151011d97fa345232b9_2508581709934325003.jpg'
                ],
                answers: [
                ]
            },
            'physics': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/b6e15d9916e680ab76c949aabfe61a1e_9215987588393903834.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/b06fabdff5c2707e8ff7575c7b9ecdca_8546072597779988167.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/033e358f98595e7605408a8a8f263462_193585982694528308.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/ae5ab259604f902a04cccd34517eccf4_4571054068135063466.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/44815e3546f5710df17cfcd3c4f7547e_2915048370527917960.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/2f3725142d1d9cea6cb1f6cbc2597043_7078962031198338178.jpg'
                ],
                answers: [
                ]
            },
            'chemistry': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/85b061af81c7cf4e3e2d0f3f0696724e_2268001397572417959.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/e99c99fa48c675109aa16bcf105a2af3_7414966514044820406.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/548176c21f528dd03544be9c27b6f320_3906193990042293659.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/58495c0976ccfd3210d085fa440a3a7f_3463701766259122013.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/2d7db74262bc666732a9236fc600822b_5795883607566815372.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/09/198629752/e4852df8a9c2d889ade0faa72569cae4_6927658145153856961.jpg'
                ],
                answers: [
                ]
            }
        }
    },
    {
        id: 4,
        title: '2026年3月学情检测',
        date: '2026-3-24',
        evaluation: '这次考试我真是糊涂了，错了很多不该错的。分数骤降。',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/14551e33d7c64d30c9e0dceeca2cdc8a_8247056021351800100.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/d1adefe3f753fbfa564459d0ef8bd3aa_7626832617257461626.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/eacce3a9c2809c3e888188c97d305e60_4620956994144385727.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/a337e2487438b5bea9fc67dcf3387915_8304786873177572000.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/e2ffc82bf2137714011e0a90f7a359ee_6947687182695053123.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/21fe8b89297bcb8e037cb774aef30ad1_7508814627684672470.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/181686050e53a5182ba123d35bb87c5d_8666231603391660511.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/827ced63e4f2a378faac9cd604bfdf49_6978436772400345228.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/8146e069f4333603dc694efe9d650d93_5265717319983492209.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/19e923f7045b25939006ea34eef8920a_4489421238465199837.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/73e48b554ca9084d4fccaa3066b83823_9002748565551064640.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/063ebd19d091930b526157e9a3268c5c_8453255093712339507.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/528d4b778bc297cfeeef0b4f7320681a_5921293998076075839.jpg'
                ]
            },
            'math': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/3844c9705ccfda2bc92808674711488b_2365753406170738135.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/4f69213a574001e5a6b6a238f77e2774_3781894129530523219.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/33ef169e08384d5fccb8c200947e461b_3850003475772925901.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/2a547adc5d448689ed30f2e58a8dbdc7_415363479965247546.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/4ee72464aedce5576568109c64afbcb3_2898619432732146550.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/2cf25adbc016e42a0670ddef836cfebc_4247969576824783301.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/ebf00b8843389dc6b8dab5440af3deff_270004158195472381.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/17548e60a8edab2c289bd56fd0b011db_3815710701273922710.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/a24c2cb04a47c742bb87e1be650259fc_1220347203697070598.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/2a4e7733fe1b0ed386f3b2cc98feff62_2634478128005940870.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/e1c076bd4d3428396bb0f63c0659af50_8868596010834417680.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/7d07d3d8319a9cb6001b303810cff908_1812523375152652823.jpg'
                ]
            },
            'english': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/868783368a0336f505f723215195e068_4754958678973391343.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/6970c4549f0ad8c798c3182ef0283fec_1082797997393171485.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/0d5aefee4502edd429535b6088a9d270_5382866665784113380.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/a60dcb56bc7696f19fff1fcb378c0e87_420784512418873294.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/5012dee516ef8ea0ab6d9fcc734518e7_46912322674869473.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/be83fe0b27faff43b85b2c52a88e74e6_5829047695057789644.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/539155598dd6666036aa2ef0becb4b46_6240823146814047132.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/b20f37c50a8468490447d9ca9e99c406_4090561416302334289.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/392bdf38989df58d057ded64a606c80a_3013037051359674797.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/8028df367c890b30e57239a357c6e854_5821623081272013629.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/a558f5445e668678957edd2583d0d83f_3861009118637628295.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/086eaef4779d9f7e7d656f3608e64469_3757903488636979534.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/99c8cb4bf9aac017316b2188fdbf9aa6_2325873088698808683.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/26e273ea622fab2104255b45f54fd791_8656240009105945376.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/9ad33bc07a5e2a9f23676697df0663df_654856135869645148.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/9a4ddfc6b3b3cfc5bab8692f44104a01_6732815729601737592.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/ba130c6e253afe4415b195ce79c86924_2172990505970280844.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/3eef33e5e5d3faad1c51dc546b1bdc18_7935777259225547281.jpg'
                ]
            },
            'physics': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/39c3848eadb0b023737dee159e67441a_4871964336319223585.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/dc057d92d50132c2e0ac4e19e5e745c4_8592555262588297252.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/1dd817508b4b03a37e54cb90b2c5f7b1_8933797704319953230.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/ad12128e134b33aa5a9beed5384dd814_3672148270159506695.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/887ce09d2bb7040a71750bdb446aff97_8747260976793995336.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/d468b37ee69f94b6e6909b1b7771986d_4676843597394089433.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/e793b297eb69c75cf7eed645f95b96d9_2468601241292007621.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/6d674aece183b9319cc18a8e8710b14a_629720179004536421.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/1f162cf92a567da1647a7fe6d34691bd_1427461119275611033.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/2976ae775b593157150dbc12551c70cb_7964257864713795150.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/64af3c3d3ec9b4df92dde37fea9e4f3d_5221601396660893916.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/f0b70261311fc68122bdaebd6d1d5577_7732890341007400682.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/faeb7622024ef30d7b3b60733e998105_4181785486589519895.jpg'
                ]
            },
            'chemistry': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/2fb29b328f6b0a89d9b20be5e05fa762_948178971973451927.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/f5aa83dd86c750e7594ab906627d940a_6166219151445115688.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/c4b1c7127fd2f686e542b9489e68a4cf_6348886742644762602.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/449184704/1b523f6e96b1b98b1203a35c2f6d3ca8_1287162733223117017.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/329e58eb72b9ab53d3441afd96255237_4591074468356367312.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/66adc63dc8981de10bbeff7526b3245f_5717965953046664550.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/c9c2404895f37d7c308277502716687a_1177191139641833696.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/7d00224550129ac1c3adb54d068fb22f_893415515586263791.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/8eccd38b3af3f32ea50a38a72376513f_5159532439661196891.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/26abb5b13938f213f736a51b81ad154f_8893885463805889705.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/74f8bf16b098b77ad6d67ef4373d9568_1463067157374135753.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/7de4051a75c437685b65f3e7e535fc00_8736581024448835786.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/41a5751dd05596063bf95920631de523_2994192292777415865.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/2d255e2c9962d17f6afc86a2f8ab89be_1939150595670250938.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/968eeefe0d531400cf7ac1318889b9f1_4442022858811022595.jpg'
                ]
            },
            'biology': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/4a9f83ac5b6858b6e73a62d5184308d3_2502422367643420140.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/8a2a2111765465b64afbc5249da8b43f_3522292701089599443.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/27b93057321a69dc14d28d7cf83cddb0_2447491433205879289.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/b5e04e71532250999da4f87469883215_9094794169571760842.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/6fa8979624067f3f537eac06e124b8a7_8499673843534923968.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/49358ae4ea6249c8b2c490c083d88386_15780738110552051.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/e583e4da985a9bdb278dc630d5551e59_8255224520724227305.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/cce54892fadb30db8f6fcae495daf062_6534981226174985686.jpg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/4b4eabab11b9d8da0fe6e5deb9b6ee03_8404364567031526160.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/2112fb8c67c61416a11888cb8ba7ed23_3839733237381836041.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/432454b7a15d7ce95bfbebbce6da82df_1261443626863664917.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/ba7923d495b8ae930e1090378cb01f86_3129046104447649126.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/b2d209ae10363274263362eb1e73ede2_8953768031860361548.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/1f307fa817212f768d5cfde74ea5f854_3091774214046287040.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/03/26/198629752/87501d6ab97224e57a69f55e17406c33_2197412150296399105.jpg'
                ]
            }
        }
    },
    {
        id: 5,
        title: '2026年4月7日部分校高考适应性考试',
        date: '2026-4-7',
        evaluation: '这题好难~<s>目前语文试卷的第6页缺失，我预计2026年4月11日之前会补上。</s>所有试卷已经齐全。本次考试成绩由于未公开，因此无法定制成绩排名。<img src="https://upload-bbs.miyoushe.com/upload/2026/03/10/259044780/db1e9b9318acc5027952fc1968ae2ec1_789105630867411132.gif" />',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/09/286158760/e898e61c60c64049d22f281f3bf7e899_5977358314398966260.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/09/286158760/3ba6778df18579cbf87c81820be3226f_775135270385371860.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/09/286158760/d1127c3489244a1cb146874b041f3e69_1773341196192295712.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/d81fa68b40af934002db5b309cb6fb25_8483245560156498434.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/724bce27d2997a96663b9d1b42944028_6570477165416006274.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/2c5af467b681593472009573bcf6711d_4591958909192542356.jpg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/4089a892955005dc4d4321d33316fc89_4804990197579654865.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/45fb6be368cdf4fa9f345b64e459f773_5631032744967321688.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/46a411fb3f4b4b42864bb50bb263a2f4_4717817873242554758.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/31aa11a9eeee00c1f3286593ec669096_2472233705570375042.jpeg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/11545936ee18bb6a03b0088b1284d90b_2207562494947059802.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/90033279ddcb9fe76f806845da2a0705_5719627235666990854.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/ebbcaf540bbab24f7097e50ab684448e_6455901044126058713.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/d2f5dcaf1f87fda6b638221ac0b880c5_8895197399365769726.jpeg'
                ]
            },
            'math': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/0904813afcb08272bc482a231b8398b4_6286609606135642333.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/e62706e42848f0706ada6a00437fdb6c_4568859604254339210.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/24acdd67ebe1eea6d41b775c15b36163_536222909284172033.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/d265ef1097b7d94d0acadc17d6d7d355_1534777386002417187.jpeg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/bf474c01b9f90497086331a093bebd5d_8821907954472755532.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/d8867441e0e63668690245468abf5799_308618744258094168.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/a89f6bc3e314be37a7b123295453c747_8377365446256283883.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/d3c479f710d08cf852dc0f334e6c503a_436251618135328301.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/1205e3243e20c3235a620b476682acd6_562242102075930153.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/7e3346605245a68af793edca2ffe0d69_2337273842179175826.jpeg'
                ]
            },
            'english': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/1f6ea3ed0081cd7ef9dbd2f740af2d9e_543137347331490722.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/1cf0cdf587a021599c52dcda84b9da87_4505611109215902028.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/0162dae340489eb9aacca52cc5b9c915_358167822531864271.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/a7abb998936be0732756fdf159a06a57_5191634580685311650.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/68155838582c07570d0eb3889b55d7a6_4872788269052346785.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/68ba26443fe4d2889c00ba1894d0379f_8850519473068369832.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/ee458c972765be62adf3ccac34b74252_5025252479681642684.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/a17081010776baf559fb4f5deec7357f_7879034802006018127.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/17ed5c47069175266279d6d72b495be4_10019799797932353.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/b221f83d485fffbceda644eb89593767_5279193036930018733.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/b79cdc575e827979911e976af3bce69c_33110975901109981.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/36ffcdc0b0dd7709ce7c705e55ac55aa_2120098704661631144.jpeg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/8eef3b1fdc15880a9687bc025620b63a_2725203554378398433.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/b1a158915006878d2b4fd2add82d08e3_6497736644894166462.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/9699b00941dedb9046114bbb80da146f_8238446572142041541.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/0dd99878b30713cf292cfc2a3442a1d4_127561114073516270.jpeg'
                ]
            },
            'physics': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/d51c60c4c2f81edd7862dbf91102d0a7_1403337211902885109.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/110ce509eaa9c8666052e6a95b0cdd59_6796844672127084236.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/21c53ffcdc04c5182647a5503eb101e3_2606497064116015104.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/d760105152406a623e4a97708e38d895_4839513604502913368.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/920e61c8300947af692c89b54f93bb20_4260917217936098078.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/33487da9f0eb1a03c3d7af7d68247930_6288918446322163111.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/dc410a9ff4b033d7070f11280c9c6b51_9159690010189995769.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/7ee6563e1e3f1417378af1020e3027ac_7953406974341568205.jpeg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/90e5a8e373a2df6b24183213845a1f89_4733507409886238654.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/73a90213a946447204cd64da571667a5_7246195289369564085.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/f8b2534341bd0752bba967bdab999a5a_3732539095346815991.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/36e62c93f42886a0955df34937cb7db6_1956994028262047925.jpeg'
                ]
            },
            'chemistry': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/02a871155a01d86dee7f1d8edc7c556f_8033510009480778631.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/7d4bb84d2f91fe6669fe0336b6247362_8687040744771697618.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/13f50fcc890c9d93ac123d6ca60022e6_2197331830104196025.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/e265ce6ee492ed8eb4f210667308e31e_6200269351646961396.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/eeab479fbe7e062dc990aed52231a7fc_4213352679226743274.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/c0499e29da5ad46fa050de6f8652b934_6478083719676584546.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/4d8d1b0d55eb16b921c6ad67c071e9a3_7793894081689137618.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/c6b33baa295ec4b2f4eed923c20aecc8_2595922842473217182.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/74c82cb2c2f5911f29fd5951e4b0819a_2819284397789706506.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/ebfb86b8c661094ca3d453b016be6388_8980377472747896009.jpeg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/b68d378dccb42ee1a185551ffce2a7d6_4904679275055770258.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/286158760/185149e8344057b406be8c0458da0128_3477090658037088628.jpeg'
                ]
            },
            'biology': {
                examPapers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/f92158593f34810a0b1d26f794287082_1628355239241930549.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/aa09225586f0aaf3a1cad0e88a216b85_338497839364885532.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/e7e9cfd976a4a23451f87add954aefb5_8456860264097014758.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/1dc7568979af63cada73c85a2b134745_902500704067350649.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/5807b2cd901ac19296c00421db7b20e0_8939390301650556802.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/5d64ee66c2a6a2c9019af01692860fcb_5816705021101523581.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/62b2a657ddb424c40aea753ec3dd9467_7697252759852337754.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/25694ba6329c672f803b6b433e69e01d_3958629739527458618.jpeg'
                ],
                answers: [
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/fb418b97f50618b5aedd970ae86f09c2_6519952531431565218.jpeg',
                    'https://upload-bbs.miyoushe.com/upload/2026/04/10/449184704/68eff5c04801d331547029bd36d28b1f_7755619311259900670.jpeg'
                ]
            }
        }
    },
    {
        id: 6,
        title: '2026年4月学情检测',
        date: '2026-4-30',
        evaluation: '这次考的很好，但还是有个别需要注意的地方。继续加油！<img src="https://webstatic.mihoyo.com/upload/static-resource/2023/03/06/0992e2359e132707e4b61812d8066c25_2052201000163681033.png?x-oss-process=image/resize,s_300/quality,q_80/auto-orient,0/interlace,1/format,png">',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/8a15d9ce1d1eabea72aea7cab3cb478b_7217494179643239329.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/46cab55d30624986688d6ee0c3f187ec_2164455121143814834.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/f03b09952499275bcba17773e27e385c_2394167647029626392.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/58ff5b2d81038a95be49d94b6d92a468_4896610170880912725.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/23aa32e68cc1052b43835a088e82f2b4_6677875460407386305.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/44ced0e14631553840542bda7f369850_9072974131911431726.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/73cc1cd030ce96acf11c04896206e675_409513851764098265.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/b9a462ce677d55a57b4b52e8ac6b7f5a_7977266519172550698.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/0616a552612322447238bea3cb121bf7_2238974468210227305.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/55b113fca65f5d1d9735b4e6aa2ba8bf_7553257797202238783.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/21ed3249ff3da77a8207668a76479b3e_4013176992733942751.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/5e997a2a3bbf36c141e3a97a007faedc_5704873674599498850.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/581ec837db724bf97b304fbd829e2dfb_4567308604175059666.jpg"
                ]
            },
            'math': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/3f003d56cd856e21315166996f3fe3cd_3875041182774317489.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/8b6f6dd8c9c22955591fb4576626f602_3205648433955575322.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/4f5ac632818fc049a2aa350fb8901fa5_5171344267105121693.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/1fcc932dc2200238c806504dba2cf523_4196504022038946400.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/d16d9011685a7369b20124c85caefc99_4332363059046872293.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/aaeeaaab080ea60cc0bded95db829f02_6348951222393539768.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/561599986ff3074838a0d3c702c815b9_4212600354161575312.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/01eef24514fc4cba54d193691f4b9545_4668521630356136208.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/f20fbad9f03f1a2932e7ba87349ca57c_5124294162551816801.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/c62584e1714b088ebe32fe6840d75a5f_7406338221454654256.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/fd18792c82444555d40f736311ed18f7_2609882261338413828.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/b1dcf48842459b3acee2d7d8cbb88e72_5735709170063090818.jpg"
                ]
            },
            'english': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/e3259fe36f0c9f9c39f5a8b9c42ed168_4457701934644297827.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/e21bbc4587953ddb278293fd682e3120_8088183034515060600.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/7c8e14c118bc7a22ef3ec5110c0f880f_8440730548029427153.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/64ba1b796a742dbd679586a312f69c5a_5342248440500798660.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/714807bf96e1ecca91113e8f59f70686_6960417420562789662.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/d54323b8d9cd735c8434fbc3e1e8ec4e_644620223683411389.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/efbaf69525de6e8660fd2b208401349c_6233606585336536210.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/7d5367c884694954e33c50c3f94a9523_1453244304275045971.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/20da95cd1b9dd255bc6dcf9418ac3d5f_8252839102152137568.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/ab3b3d057ef0209a72ecd8d56707265c_5672669602439057730.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/40b5fdb2db5eec325735bbc75c2bdb82_1203992992263618137.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/76dc3cdef7c463fb6c962bc38eca9c59_2448792535552518540.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/aef3759ff52f3668abbedea71bc3ebc5_5697059288405932506.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/c3a61f913868a123f20282d6e9937c29_9066691255429267629.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/e5d50b67577643dc2b65ae667c85ec0e_2997965022408364764.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/40ec6b71ce741aacbf6de9584abff020_4571428676471886214.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/d9825d705c501036ff9f37fbc8a42a83_149127065702235921.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/c1a89e59473eef4c5c5f5eab6efe8ec3_444950890533206978.jpg"
                ]
            },
            'physics': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/3523d4425aea0015f58cbfbfbf649840_3003231057159261445.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/f9d8a322de6744d645efc35275d96d5c_4590390472232876177.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/5efcfb1ab83e06fdaa1015c469f7b279_3392880072916070088.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/8daeadf0c13fd5a5b6411e5cf4342389_5117214025159783478.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/c434eab007b52f305cff4293db5f4dbb_5914032899866724280.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/a50ab8b4a75d8d7bdfda100f6e54cea3_2453894582675930570.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/f0bc2976f7914d02eda0b0849d2b50cd_6387357174666103357.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/6ca1125a7586b3f29e482b2a1aa5e971_8273635518241097891.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/f16845d303689e6513b3ac32e0bc5c40_2141574833330786425.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/3eeb12125356a373663f8c43e6ae319b_430301787222090779.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/1cb1ca5df1a558106227a825a4f76594_6632518042532672771.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/d8a8e1840320e2333fee80c50eed5cc8_6808463312628207167.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/54bc7bab6a5b7e3db72655221bab8008_765942617786727116.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/92746825c340e6c5317238be9acb6077_2561718499542133022.jpg"
                ]
            },
            'chemistry': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/57e4e3ccaedbf75256e9118279c9a743_2841823399476129053.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/3690c9247755c3dc256d8c75659455c4_2413453122672137505.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/bc766e4a13721ad2d015fdd5fc9e157d_3231473189778838228.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/6b16c019c47568529742f0be30299618_3025737333883820459.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/727479c84c7c5ad1a8f4506fc3df8477_2393337134819304824.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/f5bd215caa41bb37a05cf3f711844111_5923969341020742320.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/8927d01146a954d3f0efbf6fb69c8467_977251817940279889.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/1b6fb7c87adfd350e249a45c61159725_8940208109667619796.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/a47a973bd7b57f400e39373e1272f55f_1691232687829148558.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/225aa5623c5cbf8a13f007d23216fb45_4223566726423019179.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/e9c8146950d2325557c7a8ffb7b75cd6_1745447648374801053.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/cc67ec33ebcceeef36ff04fc5b4ee662_5207146761973406096.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/5ef9ac87900eb135226b35b12b030742_921894800255423371.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/45cdc5ac0492804952064e2062637244_6084466721266773270.jpg"
                ]
            },
            'biology': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/b979032c81453b262705bcdbd74031ee_9143386162274760381.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/94d26a726121da89adafee2a8cb4a90f_3772184853009106559.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/43a2e01066b3f0e5c2ee96d5507c0a5c_5277952562583030075.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/4548870cb0d484b61dadea0b6ce8b6f7_2837592057505178343.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/0d2bc3422c889b387db774c330979f0a_7214986944258775549.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/d20277b15e26573ea58effc51fd753e7_7391605763668152538.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/9f990323ca8707a89caf8b8e2aefc0f3_1239325925058467857.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/319434684/c222d7bf3940547e56af9a6e636bb607_1074496814610965136.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/c0fea723ff765830f35ce46384281a84_976666283722809941.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/7ec7eef8ef8b2bb4677e80197d0d79d5_5454764314596006860.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/aae713c891ea3c138c5ecf45b77b5fdb_9194129039597072532.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/c5c23e7a44b91291b48936ca2bbe916c_4163883855255760223.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/1ebafc7e81f49bfe129e3ba08377ffaa_8218425475076162039.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/04/30/198629752/61697649c19679d1b457a6bbc768345b_3687176543607442027.jpg"
                ]
            }
        }
    },
    {
        id: 7,
        title: '2026年5月学情检测',
        date: '2026-5-7',
        evaluation: '语文又没写完，这次可能是我最后一次来3号考场了，原本下次打算再考好点去1号或2号考场。完蛋了，这次是真考砸了，数学也考得一塌糊涂，虽然生物和化学考得还行~<img src="https://upload-bbs.miyoushe.com/upload/2025/11/19/225769374/7c4ba9fc03cfb3a2c0e33f669d4a0637_4923455596869537465.gif" style="width: 200px;">',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/9d27ad3ded1e9cb76c087e1baa40aea0_2015330534487516538.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/e51b3d73d8c24613975d3ca6de22a970_2439256381298607761.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/48826c1fde4c124f9f6daeee99d0b084_1075612516930381717.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/fb6d267400ecc01719b7d98da63784c4_5902106134076120045.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/0897183ab26d83fa7cbddc3294bd5cac_8123540601833001868.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/28558eb0f5a54faae8526d6378f140a1_5700494071431019195.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/47b94f337d60079486dca86d0d94df26_2506263619022689124.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/58ad049b7de992ef8e5582b49c3447c3_5712894163713616066.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/5890864698ba734830b07b35bf39949e_8553674385964334405.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/4f822a10354b3e0267c2b9de978f0a8d_8149895019316561193.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/ccc7d05ad015fd0aea6230af4c0b436f_8066190526861591809.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/f65b6f87dc21d0e7eb7504ec27f0ec29_361678503440749454.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/3be6d7e47f83f0d72ff5ff8f7a64d34d_6810855637745137986.jpg"
                ]
            },
            'math': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/d407e52c1ddd7d7ff58e375480960036_649680172908562283.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/97a95398cb5715f2e5ef6b3599f79bea_3457596363209013571.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/4a0ccf655495d3966c75f35bf60bdc61_5171709518808487286.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/e02a6a1f4796038190e0310b4991df7f_1895816550784094005.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/753a8343daa6550ca09cc934b4d7e6f7_1824237153878079249.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/2d5431a8a6e0640564eb8b212111a977_631858187628100114.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/4bb6951a8e2f88e030273d92f7069d49_5749432234499904226.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/8714913c3940dc3c51f096b791f1db88_6239736170386020117.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/80c3a3951c4dda832db3020787137a50_3182231941425579698.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/417b2da314e761324b25bbb8baa85770_171195926746658449.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/69f5bfce0845ea589108a4e4c352316b_8451556191147690914.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/dcba33ecfc1770cfd3b8f776778d5772_667720554916822156.jpg"
                ]
            },
            'english': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/5d9fe20ec633fcf0327aff2515912cc7_1244415247415106343.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/de675c228f04cf43b776133f846d10c7_720855101349882007.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/2daa178639a889efbec436628bf735a9_7133889172479202173.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/36c5dcd5a322e5ca09fd131d08b4c280_4631147039382120868.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/00fae4b2aa9bf1c9bd400f2f11486c21_7124143861889978392.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/85f1b46d49cfd023eba2406bd4093159_1968998526942650259.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/836d5754d182f2babcc5b073d2671fd7_5295008802903848905.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/5619bce2d6ea17db72e7f058762e5b44_8292814631055981309.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/b2cacedfeca5a7df71044e77df32627d_7395411245648936446.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/8a9b8c69f42642e2a04b485d42f78186_2639575973539580108.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/d6c313da4e1762d4633d1efbe627d3e8_9157739853740707978.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/8dd5346774973ad1ea57f9a53ac323a1_6387385047175640849.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/9f7ddba7e1b664d70526419c4ca883fa_4907040735129895299.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/d3b9030ff63b992408cf0566456746d7_3184642616186619708.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/76496101b9e5bb68bb4fc7be7e558e1d_6506621091973217151.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/193e6265875419eaf5b2d1d31af18105_6148324548973289430.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/a2c650a0ef2d5f6466ecc8ae93284e89_3991737052769236821.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/09c5129555316ba6464b2b2cc531aeec_5036127184267150893.jpg"
                ]
            },
            'physics': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/31d97dc67222f287b6eace32d32d792d_8664658995369111211.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/5bc88611586519afe460c748457a77fa_228721602081997918.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/bc36812eb35db2b67824500ea684220e_5293386641319812699.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/a180b6952dd1ce78875f88dafe04752f_2028746596002426660.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/3cf8999d625716defd3d7f2335877cae_5638788385077541280.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/5d8855d65b64a32db3fdbcd707f205b2_3176749338917462297.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/a71d4d04a8d624f904ed6030edaccc12_3515827650061806091.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/308dca019ed884165c53a469a7a449be_7231188288968991162.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/57eb3c8ee0effdaf00b3f70e6d82eb71_8360585128084767620.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/cc356a8645a2a2797fcc0b25d70d77d1_2090505173327486128.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/cb5e19fed44526049f0ed94d9246710b_3878913593496854451.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/f17f1d162170569b1104f604d260f7e4_3899791087692815481.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/bb96d80189e7357ced45b25c3bd6e82b_142955141988577961.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/48396ac867b505ee73d3e1d14adc4d45_1172789586559664016.jpg"
                ]
            },
            'chemistry': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/29503b83d84a8deb87845d8525f1d162_353730156539655924.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/35c3d4c738cdcfb7408910a8f1a8513c_7612930369105510515.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/4116e622303f7f7ecacab9620ea73152_5214312890390191840.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/f5920d172f80f2b3d612df2aea62f764_1154661541722799489.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/507462db87d0018aff0e042bc1a0bb5a_53993974487512581.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/fb79a63cf49de4cfff37fb9a48c9963b_551391081766438892.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/fee1dfe6d2fdbc3c23ea8ad2aee1e5a1_2772981923340699978.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/be34bc78215c087f3fe1c5a1465b7d16_6891826349231504817.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/e3f72b41b231239be54ba5475cb7c973_1756139186153380791.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/0f568de8da5df4709e8b513393b73dd7_7882514545560612346.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/2b7e7d6c5eb9ca7ae254ca9c03c880b4_4807572163213683037.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/7806c71ddea21e40c086bcb33d22c58b_8813778954908277298.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/27022f20e9dd6d8916295cac677a4a1c_3309271967790862483.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/bff2b9a87a468d59b2602e44dcacf678_4831964971118574279.jpg"
                ]
            },
            'biology': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/e7cca7444021bd796fc88083dd9adfaf_2765247662460029958.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/7f1f21ae3cd39a17d00a595bbe1bd0d7_4257319633756058464.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/652858c454590093aa3d9ff20068949b_5571804023011340550.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/1b396ce54227d680f115f7624dfdca3a_3892609173391478304.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/d0d3f3536d48a7a9ef44fe43779d3f57_8301244417327729647.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/e263eb97f25d8ed3552423b6df264d93_8151800224023169228.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/5a6753c7e3dbeb2f99cfaaf036aa5ae6_4254298067706474120.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/07/198629752/f1b40c8f20b569c4e0c4f62f2bb2e2cf_3199947767879044490.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/bf33902560cc7896736131b095becfb8_4999079610588556965.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/598768ea7e94c0ea35b37f0aa840884c_8106147462277222867.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/3c86bc8871e780b2f227da91d054a6ea_3649687915624955676.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/fd0f2c11ebb21fc5cf5a1c70240c990b_8047840893413556502.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/bf66545b31960db14da39a371d09ffbf_161120538841307272.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/dadacee335cc5e3eb52a0be6f9d73a1a_1242749491569271204.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/08/198629752/9abffb317dd58c7b5b87eff807f2e583_6375128641944851414.jpg"
                ]
            }
        }
    },
    {
        id: 8,
        title: '2026年5月高三全真模拟考试',
        date: '2026-5-29',
        evaluation: '考砸了<img src="https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/b90fca2122cfbed8ea4a2c2b10833d8f_6841916861480070685.gif" style="width: 100px;">\n希望我高考能超常发挥吧~',
        // 每个科目的试卷和答案图片链接列表
        subjects: {
            'chinese': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/ff00c13486d3ce52f99871d1cfcc15aa_5498814283506853981.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/5e167adb2611601d124c9005cbac9d71_6483300354189646210.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/2c86f0d68454a03daf91d285c23aecce_5270563092975098633.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/db877a914389f379a194a4942812ffd3_692700029143089656.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/c99eced9c331d2e913ccc4a37b684096_2675930097210941815.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/049c4efa9d98d4c29240262bd0ab8e59_5185960906659526962.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/af89b355c4a3eda9a774b38eb9e0afec_7982148141467227361.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/cc2cd4e3d1acd838ad3419e67989ffa0_762254216793125578.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/02f317d73ff5d90282bc71fc78ac4956_1525448649520123763.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/ef8dcb5ef3d8a0bfc624225ffb809b34_2888027321736924347.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/fa57dc217e9e9c8dc1a9953a901acf1b_4884871454773315339.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/90351b9362780562be367047473f1669_1949599261907645536.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/1c3f84e4dd100f1e9258bfe80f9d4e35_561882496876574973.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/48cb07f1cf8d7c7f77b134c41aad3492_8862149780701766983.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/fbe03d22e807a9cdc4f45c15dc00a5a0_8917704103073370951.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/aac6c0f26195c01b3d11b77539be92b0_152156448645045114.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/29ee921537cad1f05ec8411651a3d4e6_6517919229452669885.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/75f753c5b9fcc9adcd26595dda6ecefc_4542742415389052431.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/4d6dba868b173d7ee61e52ae9dea0d48_4119853915875315963.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/bdd8c323c00973e484a146d0b3df833a_619226712034411403.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/fc564744a97036097b4cab6871bb2fc1_5230722176141615884.jpg"
                ]
            },
            'math': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/056cb55c5d9a523dd27ab6ce35f1560f_3876992465210678870.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/1fa2036fed3c61223d828c2063a4ade3_5153335157181348430.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/241578c52e0537e7cec9dd0ff7b65c84_6212474393185602245.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/6ac3c75ad288ffb46e971e34bd6ffbbe_6602759097879544708.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/06afc644f70ad450431eec7df22c3150_9103753698885006752.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/c653e5f5bab73eda9df3cb3e92c47623_2396414245847060423.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/6206e83507aac54666a750baf72b5461_9112277642921038437.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/601c729d16cea122e9c141c451224d2e_4681139731357688700.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/5bc05149d0c874cb91e1d32bbaff58ea_1742808006706243995.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/e344d1e61fd35dacd7bd1023b159a96a_7649282545413580056.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/34021b62b22403f83ac1180e5844a0e4_8350546666699674365.jpg"
                ]
            },
            'english': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/547e69517b8b61ca6599c955569edcbd_2479243491057246145.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/8c5735bdcee617333eaf56d8b0ca088d_762388636239945199.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/136b03571ffebe84428a20393e104d39_15819827880512778.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/968cac70f91a0a4031bf73c5cf55770f_9132882639596112553.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/9f6f7f6a6febc05a12c0b274ec77517d_6289621659941432602.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/8ef513d4d646da611481e83c0a111135_6652718020742750004.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/2d420cb607b4dfe840ff6951546042e9_4380483266001242946.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/df78b12584b9951a5fe5ae554e15d85f_2960230271179998069.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/e74f2547710e431405733141bfed4193_7784801170451004454.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/60f59ea7eebf845b7e75da3d560db70f_7788561093824534341.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/5f35f01c0149875b3e59e33394c6e181_317668644391320615.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/bc182ec01024a01c908d46afa00dcfca_4018952986879547725.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/f467b629825fd3eae8be1d5a72c18dd5_1758694621817405071.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/1cfde7b4b71e477aabec68bedf4f9baa_6242098887416900619.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/dafe4a8f3cabc69902289d8ce484a957_5469418006634245814.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/daaf128e44dc3ceacd49f3200292429c_9029155781388893194.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/a12c3325f775b49a6caf22d88ce9c860_1147893078005126290.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/4dad9c911e08e0a6da92242a32032c1d_5451538998132622036.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/6492a9f68cb5ba10fa08784e9f7b5f07_2377734876169376314.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/9e591b3ace9e325b235a4aaca01c7cd9_6791902314434595597.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/99fba9967539451a9c139734523e95ce_3114355805447217789.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/801bc5ef7125a941f0f47e4b490cf6d8_12471846752233132.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/53de051566b1af0bab22abaf663cd4c0_5336176426256794476.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/77a16f1e10c37f99598ef05f5e3c4905_4464966103806947257.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/c49ed66a72d5f9750c6e145416a7b49c_8822523892876289471.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/de753945a20e4ff1aae2c120d7077c64_7224507459753551654.jpg"
                ]
            },
            'physics': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/2d3917ccc048145c7ff33fd966861754_5997748293050851700.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/144541e4ce0052cc7e51e61b272eab1a_7130530996509662271.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/8cfb13bf395980436d5bc05a7784a442_3864138692861908874.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/4bd760274d4f82ca93bed504bbee1acd_218214500591950993.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/1df762831360be2fb20242232ab7b635_5973492967415739279.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/d2748c518f9ac4a4d503663734d8e1fd_2499130265289754913.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/41afe7172c9f64f6564139d7822d9363_649044307423219120.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/d5b99be9a08ff0d5c8c736090cf32898_7238228117115282151.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/030dac71496dc4dc1d4977a35b9d4935_5926492154915078889.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/f42c7c5516e35136c16e1f07babe842f_529152906887726573.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/4afdb84065087e1099fd1508c90ca994_7275896761886395344.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/bfde002020574278ef268ed8c4de3504_4730974530556963194.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/92f46b0c233e692b83ee2923cd701ecb_5986835946993101057.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/87d514a175df5cc51e001b234ca533e8_5602828513862826542.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/0c38445f6a19b9292f3fa390f5ce3375_2597492145208801757.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/6f823a7e7f6af19ac2509cf8a3472c2c_462016624163967530.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/ef42846f4815283587eeb2921bd124f7_9195972875859617587.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/cbbef7aaba6e5f01c4b085f869432a10_2402490037904648330.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/0c56adbbe8053d299ebc87c4ce648d35_4704239578326781677.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/c05abc95382394281dd62d9ad0713f72_3893903358260282123.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/ef6a2ee4d8e9b06b6b04ee8e906b804d_5457787480805343136.jpg"
                ]
            },
            'chemistry': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/d4819148ee403b9b9df718e75176a55e_4695992860305259470.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/4e3d903488f9d9cc2ee0538329d69d4e_3388260913534512980.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/4acdbb9fce3ba5a8fa457a11ad524eff_3252114798684162028.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/b7ca17edfd042e6b0ac1967fbf600349_7290372506594629358.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/0af587be6a102d94ff0c496891fc94cf_3337120992575777454.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/58f3239040792733ba538a1bc30dae38_473255647972101134.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/286158760/dfd3de363333793e4029431e73fe9ed8_9211665999104148680.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/1067f0f4d5b244ba8a7bee6921b47075_5409759834585281014.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/a57f5f292f11cf7013d6d601f72c45a8_9207188001498406937.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/1194a7d1606897f5a6465ffd458312a6_1697515764738933158.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/2936a6981f8403febae497246fa8103e_2469451115093292866.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/f4d7afa5a5d3d156d47a72ce803abd3d_561504227033167482.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/4468c3ae1adef91bf73db8e187d4b94d_4502388013368516119.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/273c5b17d63301adb36e910e4a7f6271_1057546358085007099.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/b420da97fc5a649e6bd5af5738cc64c7_8584536180494791843.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/6977dbd9e883863fa901d3a7879e6d1f_4544395961825072553.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/25abc8887bffd058805f49627818473e_6372105783506912343.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/85d86af54860d4f254a94a44e9037ef6_5206582204056948608.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/422deb0cfb734f1e5682a259694e6fac_8933886611133929104.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/62ff1f6ebafbae96e7d27a359a0730d7_8764191268837323741.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/a94a92289b63932e0d25c2d21b3fc9f5_3574315909166312033.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/1dde40d145aed2fd98d5ca2b9860cba8_2448425954931212833.jpg"
                ]
            },
            'biology': {
                examPapers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/2f7feea5118808221000a859fcbdcfe6_4575099739911694002.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/ff4408476c888d2f36ac6ebb858cb05c_383026377339832387.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/0da581ebb88102ee8c939eb9cde22897_1197040784445768607.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/35125b0f36a7d2f1ed029682a7f9188e_54832616090565719.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/740caf9e78068d65f0d0e006b447d489_796265837786122082.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/960bd9c4cea41363b55999208c1d7d0a_8198471330915951430.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/263078280f4dd851b9db9776af4c6084_7231726070065337658.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/fa97b35daada1fe6573c0409e4d02c8a_5133654370112119647.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/e4c0c76a19d50a04124b9ceb21535cb1_3774093565140200072.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/39062ed2f2232e0667e45770eca5ee23_2623856197834459501.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/f451d701f70143c66331aa0520b9b2dc_1031533555447188811.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/257614bd7e2ae49ce7733a1d7c6b306f_8909923347538912267.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/5f4f9697119901d5679d45e03db6c881_1863186648697030640.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/f0760c63cb0e005f24bcb81d9f50f314_9039560181958936801.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/9086213a6fb1e47e8876ba1ea83f44e1_181008107437364943.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/13e27a6f0aee6699a9bb003690dfff0d_7581592990793156360.jpg"
                ],
                answers: [
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/86488639fdd4d719dc1415d8be7e2be5_7993805382461931882.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/198629752/5a7ac655bb92fbdd84043e02ae9631b8_8541607217713487711.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/449184704/aebba9678f621698f79fd2b5491ef821_6159971539388814022.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/449184704/8491dd86bb7aa79c5e1a28bedde6a345_6854752440070822638.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/449184704/0294311ccb7009d126c0d0594d33d104_5816429756617036690.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/449184704/b5793928ecf0ce05014ea40c0b493167_2041995231167502262.jpg",
                    "https://upload-bbs.miyoushe.com/upload/2026/05/29/449184704/ff5fb1bce993938300ea247b4e8142bc_6418877391889536722.jpg"
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

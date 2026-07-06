/* Ocean Heartbeat — lightweight zh/en i18n */
(function (global) {
    'use strict';

    global.Flourish = global.Flourish || {};
    global.Flourish.disable_autoload = true;

    const ATLAS_BASE = [
        { pickColor: '#91B262', riskKey: 'medium', coralArea: '1,850 km²', healthyPct: '32%' },
        { pickColor: '#7F59E0', riskKey: 'mediumHigh', coralArea: '2,100 km²', healthyPct: '25%' },
        { pickColor: '#448FAF', riskKey: 'high', coralArea: '950 km²', healthyPct: '18%' },
        { pickColor: '#F2EE83', riskKey: 'medium', coralArea: '3,200 km²', healthyPct: '40%' },
        { pickColor: '#F4A4D1', riskKey: 'mediumHigh', coralArea: '2,800 km²', healthyPct: '22%' },
        { pickColor: '#78EBDC', riskKey: 'veryHigh', coralArea: '34,800 km²', healthyPct: '35%' },
        { pickColor: '#494882', riskKey: 'medium', coralArea: '420 km²', healthyPct: '15%' },
        { pickColor: '#8DCCDD', riskKey: 'high', coralArea: '1,600 km²', healthyPct: '28%' },
        { pickColor: '#A84144', riskKey: 'medium', coralArea: '1,200 km²', healthyPct: '45%' },
        { pickColor: '#D57F80', riskKey: 'high', coralArea: '2,600 km²', healthyPct: '19%' },
        { pickColor: '#383292', riskKey: 'high', coralArea: '45,000 km²', healthyPct: '12%' },
        { pickColor: '#61B345', riskKey: 'medium', coralArea: '1,100 km²', healthyPct: '20%' },
        { pickColor: '#F28E5D', riskKey: 'medium', coralArea: '1,300 km²', healthyPct: '25%' },
        { pickColor: '#8A673F', riskKey: 'mediumHigh', coralArea: '3,500 km²', healthyPct: '18%' },
        { pickColor: '#935F82', riskKey: 'medium', coralArea: '2,200 km²', healthyPct: '30%' },
        { pickColor: '#B877D5', riskKey: 'high', coralArea: '2,500 km²', healthyPct: '22%' },
        { pickColor: '#D65C79', riskKey: 'veryHigh', coralArea: '5,200 km²', healthyPct: '10%' },
        { pickColor: '#F7BD95', riskKey: 'mediumHigh', coralArea: '4,100 km²', healthyPct: '15%' },
        { pickColor: '#C68D66', riskKey: 'medium', coralArea: '380 km²', healthyPct: '20%' },
        { pickColor: '#6B93D1', riskKey: 'veryHigh', coralArea: '2,300 km²', healthyPct: '8%' },
        { pickColor: '#A5DAF9', riskKey: 'low', coralArea: '1,700 km²', healthyPct: '38%' },
        { pickColor: '#7A5A41', riskKey: 'mediumHigh', coralArea: '2,600 km²', healthyPct: '22%' },
        { pickColor: '#A97A47', riskKey: 'high', coralArea: '1,900 km²', healthyPct: '10%' },
        { pickColor: '#B15A98', riskKey: 'high', coralArea: '1,800 km²', healthyPct: '24%' },
        { pickColor: '#99C17B', riskKey: 'medium', coralArea: '1,450 km²', healthyPct: '33%' },
        { pickColor: '#DF8B52', riskKey: 'medium', coralArea: '780 km²', healthyPct: '29%' },
        { pickColor: '#7297D6', riskKey: 'high', coralArea: '850 km²', healthyPct: '25%' },
        { pickColor: '#A57CEB', riskKey: 'mediumHigh', coralArea: '1,680 km²', healthyPct: '26%' },
        { pickColor: '#CCCCCC', riskKey: 'medium', coralArea: '< 500 km²', healthyPct: '15%' }
    ];

    const I18N = {
        zh: {
            meta: { title: '海洋的心跳 · 珊瑚礁可视化' },
            langToggle: 'EN',
            nav: { logo: 'CORAL REEF · THESIS', exhibition: '展览', dataArt: '数据艺术' },
            cover: {
                logo: 'CORAL REEF.',
                navThesis: '论文',
                navExhibition: '展览',
                navEnter: '进入',
                h1Html: '海洋的<br>心跳',
                subhead: '珊瑚礁如何构筑生态系统，孕育海洋生命',
                meta1: '2026 毕业设计',
                meta2: '交互媒体设计',
                scroll: '向下滚动'
            },
            ch2: {
                queryLabel: '活跃生物体 // 查询',
                queryValue: '活着的礁：色彩与失落的故事',
                queryPlaceholder: '输入主题以探索…',
                journal: `珊瑚礁是海洋中最蓬勃的生命系统。它们仅占海床的 0.1%，却养育了超过 25% 的海洋物种。它们筑巢、供食、护岸，是整个大洋的脉动与根基。

这像海洋自己的心跳，稳定而明亮。枝杈伸展，繁盛生长，维系着整片蓝色中的生命。

昨天，这片脆弱水域开始出现转变——生与死之间裂开一道缝隙。珊瑚并非只是褪色；它在白化，失去曾赋予色彩的共生关系。若能绘制这份衰退，我们会看见曾错过的警示吗？抑或只是一幅我们反应太慢才看见的损失几何？

我们谈论「拯救礁体」，仿佛那是遥远的目标；但或许希望只是行动摩擦的余温——追寻更凉、更蓝未来的痕迹。

我在试着倾听。让礁的故事被听见。`
            },
            ch3: {
                title: '珊瑚礁纬度分布',
                descHtml: '世界上的珊瑚礁在哪里？<br>大多分布在赤道南北 30° 之间的暖洋，集中在赤道两侧平缓洋流之中——像被潮汐反复打磨的碎蓝玉。<br>地图上的每一标记，都对应海底一片仍在呼吸的森林。',
                chart: {
                    labels: ['30°N - 20°N', '20°N - 10°N', '10°N - 0°', '赤道', '0° - 10°S', '10°S - 20°S', '20°S - 30°S'],
                    equator: '赤道',
                    dataset: '珊瑚礁数量',
                    tooltipReefs: '珊瑚礁：',
                    tooltipBand: '纬度带：'
                }
            },
            append: {
                map: {
                    aria: '全球珊瑚礁分布',
                    title: '全球珊瑚礁分布',
                    poetry: '沿 30°N 至 30°S 的水域，世界被划分为 29 个珊瑚礁区域。<br>每一处划定的海域都是海洋珍视的生命疆域，却正被珊瑚白化危机悄然侵蚀。',
                    subtitle: 'Allen Coral Atlas 生物区划揭示全球礁体格局与区域特征。',
                    vizTitle: '01 · 全球礁体分布',
                    mapAlt: 'Allen Coral Atlas 全球珊瑚礁区域图',
                    legendTitle: '区域说明*'
                },
                bleaching: {
                    title: '珊瑚白化热力图',
                    poetry: '从 1884 到 2019，热力图逐年勾勒白化强度的上升。<br>在色彩褪去之前，珊瑚先变得安静；数字攀升之后，礁体归于沉默。',
                    subtitle: '区域白化率的时间序列视图，呈现数十年变暖驱动的变化。',
                    vizTitle: '02 · 白化率 1884—2019',
                    noscriptAlt: '白化热力图',
                    flourishSrc: 'visualisation/29002922',
                    flourishThumb: 'https://public.flourish.studio/visualisation/29002922/thumbnail',
                    flourishClass: 'flourish-heatmap'
                },
                radar: {
                    title: '珊瑚礁胁迫雷达图',
                    poetry: '雷达揭示塑造珊瑚健康的隐秘力量：升温、酸化、污染与过度捕捞构成风险外缘，而礁体韧性——健康与恢复——靠近中心。<br>当这些压力叠加，即便最顽强的礁也会动摇；风险与韧性之间的锯齿对比，不再抽象，而是可测、可见。',
                    subtitle: '驱动全球礁体白化的多因素压力。',
                    vizTitle: '03 · 珊瑚白化压力雷达',
                    noscriptAlt: '胁迫雷达图',
                    flourishSrc: 'visualisation/29002930',
                    flourishThumb: 'https://public.flourish.studio/visualisation/29002930/thumbnail',
                    flourishClass: 'flourish-radar'
                },
                ocean: {
                    aria: '海洋胁迫叙事',
                    closeModal: '关闭对话框',
                    chartLink: '在新标签页打开图表',
                    causes: [
                        { kicker: '气候', desc: '海水升温引发珊瑚白化。', iframeTitle: '全球地表温度相对工业化前水平的升幅', chartUrl: 'https://visualize.graphy.app/view/f2457977-94db-48e0-9127-f4b99622c6af' },
                        { kicker: '酸化', desc: 'pH 降低削弱珊瑚骨骼并减缓生长。', iframeTitle: '珊瑚礁健康：健康与退化生态系统指标', chartUrl: 'https://visualize.graphy.app/view/8b1f00e6-f164-4cf7-ba79-24b1dcdc5150' },
                        { kicker: '污染', desc: '废弃物与径流窒息礁体并毒害生态系统。', iframeTitle: '2019 年全球进入海洋的塑料废弃物占比', chartUrl: 'https://visualize.graphy.app/view/c654fd3e-d3a5-4f17-804c-97db1e67bdad' },
                        { kicker: '海洋变暖', desc: '全球月均海表温度长期上升，热量在海盆间重新分布。', iframeTitle: '全球月均海表温度（1990–2024）', chartUrl: 'https://visualize.graphy.app/view/aa34bca7-f45e-4262-bd42-1a4c2b05b2bd' }
                    ],
                    viewCharts: '查看图表'
                },
                epilogue: {
                    aria: '尾声',
                    title: '尾声',
                    quoteHtml: '当珊瑚被看见，海洋终于能被听见。<br>当数据被感受，行动随之而来。',
                    body: '这不是终点，而是观看方式的转变——从凝视大海，到参与守护。',
                    credit1: '毕业设计 · 交互设计 · 珊瑚礁可视化',
                    credit2: '© 2026 珊瑚数据艺术项目 · 海洋的心跳',
                    credit3: '献给海洋生态保护'
                },
                coralOverlay: '水下重建 / 04-珊瑚花园'
            },
            atlas: {
                labels: { coralArea: '珊瑚面积', risk: '风险', healthy: '健康珊瑚' },
                riskText: { low: '低风险', medium: '中等风险', mediumHigh: '中高风险', high: '高风险', veryHigh: '极高风险' },
                names: [
                    '安达曼海', '帝汶与阿拉弗拉海', '印度洋中部', '珊瑚海', '西南太平洋',
                    '大堡礁与托雷斯海峡', '亚丁湾', '中美洲', '夏威夷群岛', '南亚',
                    '东南亚群岛', '东密克罗尼西亚', '西密克罗尼西亚海', '东非与马达加斯加', '西澳大利亚',
                    '北加勒比与巴哈马', '东南亚', '东巴布亚新几内亚与所罗门群岛', '阿拉伯海西北部', '菲律宾',
                    '红海', '西印度洋', '南海', '东南加勒比', '亚热带东澳大利亚',
                    '东北亚', '热带东太平洋', '中南太平洋', '小型礁区或低珊瑚覆盖区'
                ]
            },
            coralGarden: {
                tooltipTag: '分类',
                status: {
                    idle: '长按，看礁体苏醒。',
                    holding: '种子正在苏醒…',
                    growing: '生命正在编织纹样。',
                    garden: '礁体再次呼吸。拖拽旋转，悬停探索。'
                },
                meta: { id: '编号', view: '视角', state: '状态' },
                species: [
                    { name: '造礁珊瑚', sub: '造礁珊瑚', desc: '海洋中的“基建狂魔”，能分泌碳酸钙，日复一日堆积出坚硬的珊瑚礁。' },
                    { name: '软珊瑚', sub: 'Alcyonacea', desc: '海底的“灵动舞者”，分布于印度洋、西太平洋，无坚硬外骨骼，身体柔软富有弹性。' },
                    { name: '柳珊瑚 (海扇)', sub: '海扇', desc: '分布于大西洋深海，形如扇子或树枝，宛如优雅的“扇客”静立海底。' },
                    { name: '石珊瑚', sub: '硬珊瑚', desc: '珊瑚中的“建筑大师”，分布于热带浅海（如大堡礁、红海），碳酸钙骨骼坚硬厚重。' },
                    { name: '脑珊瑚', sub: 'Brain Coral', desc: '石珊瑚的典型代表，表面纹路如大脑褶皱，栩栩如生。' },
                    { name: '盘珊瑚', sub: 'Plate Coral', desc: '外形扁平盘状，边缘微翘，恰似精美的盘子散落在海底。' },
                    { name: '纽扣珊瑚', sub: 'Button Coral', desc: '色彩斑斓但含剧毒海葵毒素，需谨慎处理。' },
                    { name: '气泡珊瑚', sub: 'Plerogyra Sinuosa', desc: '日间膨胀呈透明气泡状，夜间捕食，具毒性刺细胞。' },
                    { name: '尼罗河珊瑚', sub: '尼罗河珊瑚', desc: '触须捕食特性显著，因白化濒危，属中国二级保护动物。' }
                ]
            }
        },
        en: {
            meta: { title: "The Ocean's Heartbeat · Coral Reef Visualization" },
            langToggle: '中文',
            nav: { logo: 'CORAL REEF · THESIS', exhibition: 'Exhibition', dataArt: 'Data Art' },
            cover: {
                logo: 'CORAL REEF.',
                navThesis: 'Thesis',
                navExhibition: 'Exhibition',
                navEnter: 'Enter',
                h1Html: "The Ocean's<br>Heartbeat",
                subhead: 'How coral reefs build ecosystems and nurture marine life',
                meta1: '2026 Thesis Project',
                meta2: 'Interactive Media Design',
                scroll: 'Scroll'
            },
            ch2: {
                queryLabel: 'Active Organism // Query',
                queryValue: 'The Living Reef: A Story of Color and Loss',
                queryPlaceholder: 'Enter a theme to explore...',
                journal: `Coral reefs are the ocean's most vibrant living systems. Covering merely 0.1% of the seabed, they nurture over 25% of all marine species. They build homes, supply food, and shield coastlines, serving as the very pulse and foundation of the entire ocean.

It feels like the ocean's own heartbeat, steady and bright. Branching out, thriving, sustaining life across the blue.

Yesterday, a shift began in these fragile waters. A gap between life and survival. The coral doesn't just fade; it bleaches, losing the symbiosis that gave it color. If we could map this decline, would we see the warning signs we missed? Or would it reveal a geometry of loss we were too slow to see?

We speak of "saving reefs" as if it is a distant goal, but perhaps hope is just the friction of action. The residue of the search for a cooler, bluer future.

I am trying to listen. To let the reef's story be heard.`
            },
            ch3: {
                title: 'Coral Reef Distribution by Latitude',
                descHtml: "So where are the world's coral reefs located?<br>Most are found in warm oceans between 30° north and south of the equator, concentrated in gentle currents on either side of the equator — like shards of blue jade polished repeatedly by the tides.<br>Every single mark on the map corresponds to a breathing forest beneath the sea.",
                chart: {
                    labels: ['30°N - 20°N', '20°N - 10°N', '10°N - 0°', 'Equator', '0° - 10°S', '10°S - 20°S', '20°S - 30°S'],
                    equator: 'Equator',
                    dataset: 'Number of Coral Reefs',
                    tooltipReefs: 'Coral reefs: ',
                    tooltipBand: 'Latitude band: '
                }
            },
            append: {
                map: {
                    aria: 'Global coral reef distribution',
                    title: 'Global Coral Reef Distribution',
                    poetry: 'Following the waters between 30°N and 30°S, the world is defined by 29 coral reef regions.<br>Each designated area is a precious living realm cherished by the ocean, yet is quietly being eroded by the crisis of coral bleaching.',
                    subtitle: 'Allen Coral Atlas bioregions reveal the global reef pattern and regional descriptors at a glance.',
                    vizTitle: '01 · Global Reef Distribution',
                    mapAlt: 'Allen Coral Atlas global coral reef regions',
                    legendTitle: 'Region Descriptor*'
                },
                bleaching: {
                    title: 'Coral Bleaching Heatmap',
                    poetry: 'From 1884 to 2019, the heatmap traces rising bleaching intensity year by year.<br>Before colour fades the coral grows quiet; after the numbers rise the reef grows silent.',
                    subtitle: 'A time-lapse view of reef bleaching across regions, revealing decades of warming-driven change.',
                    vizTitle: '02 · Bleaching Rate 1884—2019',
                    noscriptAlt: 'heatmap visualization',
                    flourishSrc: 'visualisation/28786550',
                    flourishThumb: 'https://public.flourish.studio/visualisation/28786550/thumbnail',
                    flourishClass: 'flourish-heatmap'
                },
                radar: {
                    title: 'Coral Reef Stress Radar',
                    poetry: 'The radar reveals the hidden forces shaping coral health: rising heat, acidification, pollution and overfishing form the outer edge of risk, while reef resilience—health and recovery—dwells closer to the center.<br>When these pressures compound, even the strongest reefs falter. The jagged contrast between risk and resilience is no longer abstract—it is measurable, and visible.',
                    subtitle: 'Multi-factor pressures driving bleaching, across global reefs.',
                    vizTitle: '03 · Coral Bleaching Pressure Radar',
                    noscriptAlt: 'radar visualization',
                    flourishSrc: 'visualisation/28793958',
                    flourishThumb: 'https://public.flourish.studio/visualisation/28793958/thumbnail',
                    flourishClass: 'flourish-radar'
                },
                ocean: {
                    aria: 'Ocean stress narrative',
                    closeModal: 'Close dialog',
                    chartLink: 'Open chart in new tab',
                    causes: [
                        { kicker: 'Climate', desc: 'Rising ocean temperatures trigger coral bleaching.', iframeTitle: 'Global surface temperature above pre-industrial levels', chartUrl: 'https://visualize.graphy.app/view/f0897b9c-84db-4c9b-b1bb-8ec962b1d6eb' },
                        { kicker: 'Acidification', desc: 'Lower pH weakens coral skeletons and slows growth.', iframeTitle: 'Coral reef health: healthy vs degraded ecosystem indicators', chartUrl: 'https://visualize.graphy.app/view/2d4c0d72-af30-4078-bd38-d0f1dbb9aeb4' },
                        { kicker: 'Pollution', desc: 'Waste and runoff smother reefs and poison ecosystems.', iframeTitle: 'Share of global plastic waste emitted to the ocean, 2019', chartUrl: 'https://visualize.graphy.app/view/187756f2-d395-471b-9e86-1bfacbb94d86' },
                        { kicker: 'Ocean Warming', desc: 'Monthly global sea surface temperature shows a long-term rise, redistributing heat across ocean basins.', iframeTitle: 'Monthly Global Sea Surface Temperature (1990–2024)', chartUrl: 'https://visualize.graphy.app/view/454a3f69-5f22-4235-8561-abfd68da73a2' }
                    ],
                    viewCharts: 'View charts'
                },
                epilogue: {
                    aria: 'Epilogue',
                    title: 'Epilogue',
                    quoteHtml: 'When coral is seen, the ocean can finally be heard.<br>When data is felt, action follows.',
                    body: 'This is not an ending but a shift in how we watch—from looking at the sea to helping guard it.',
                    credit1: 'Graduation thesis · Interaction design · Coral reef visualization',
                    credit2: "© 2026 Coral Data Art Project · THE OCEAN'S HEARTBEAT",
                    credit3: 'For marine ecological protection'
                },
                coralOverlay: 'Sub-Surface Reconstruction / 04-Coral-Garden'
            },
            atlas: {
                labels: { coralArea: 'Coral area', risk: 'Risk', healthy: 'Healthy coral' },
                riskText: { low: 'Low Risk', medium: 'Medium Risk', mediumHigh: 'Medium-High Risk', high: 'High Risk', veryHigh: 'Very High Risk' },
                names: [
                    'Andaman Sea', 'Timor & Arafura Seas', 'Central Indian Ocean', 'Coral Sea', 'Southwestern Pacific',
                    'GBR & Torres Strait', 'Gulf of Aden', 'Mesoamerica', 'Hawaiian Islands', 'Southern Asia',
                    'Southeast Asian Archipelago', 'Eastern Micronesia', 'Western Micronesia', 'Eastern Africa & Madagascar', 'Western Australia',
                    'Northern Caribbean & Bahamas', 'Southeastern Asia', 'Eastern PNG & Solomons Islands', 'Northwestern Arabian Sea', 'Philippines',
                    'Red Sea', 'Western Indian Ocean', 'South China Sea', 'Southeastern Caribbean', 'Subtropical Eastern Australia',
                    'Northeastern Asia', 'Tropical Eastern Pacific', 'Central South Pacific', 'Small reefs or low coral areas'
                ]
            },
            coralGarden: {
                tooltipTag: 'Classification',
                status: {
                    idle: 'Hold to watch the reef come alive.',
                    holding: 'The seeds are awakening...',
                    growing: 'Life is weaving its patterns.',
                    garden: 'The reef breathes again. Drag to rotate, hover to explore.'
                },
                meta: { id: 'ID', view: 'VIEW', state: 'STATE' },
                species: [
                    { name: 'Hermatype Coral', sub: 'Reef-building Coral', desc: 'The "builder" of the ocean. Secretes calcium carbonate to form massive, resilient coral reefs over centuries.' },
                    { name: 'Soft Coral', sub: 'Alcyonacea', desc: 'Flexible, vibrant, and skeleton-free. Thrives in tropical oceans with gentle water movement.' },
                    { name: 'Gorgonia', sub: 'Sea Fan', desc: 'Fan-shaped deep-sea coral with delicate branches, known for its elegant, rhythmic swaying motion.' },
                    { name: 'Madrepore', sub: 'Stony Coral', desc: 'The primary architect of coral reefs. Hard, rigid calcium carbonate skeleton forms the foundation of marine ecosystems.' },
                    { name: 'Meandrina', sub: 'Brain Coral', desc: 'Named for its brain-like surface grooves. Long-lived, sturdy, and critical to reef structure.' },
                    { name: 'Plerocera', sub: 'Plate Coral', desc: 'Flat, wide, and table-like shape. Efficient at capturing sunlight in shallow, calm marine environments.' },
                    { name: 'Zoanthid', sub: 'Button Coral', desc: 'Small, colorful, and highly toxic. Forms dense colonies on rocks and reef substrates.' },
                    { name: 'Bubble Coral', sub: 'Plerogyra Sinuosa', desc: 'Inflates into translucent bubbles during the day; extends tentacles to feed at night. Venomous but visually striking.' },
                    { name: 'Elegance Coral', sub: 'Nile Coral', desc: 'Catches prey with long tentacles. Endangered due to coral bleaching; protected in many regions.' }
                ]
            }
        }
    };

    let currentLang = 'zh';

    function getOhLang() {
        return currentLang;
    }

    function getByPath(obj, path) {
        return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
    }

    function t(path, lang) {
        const L = lang || currentLang;
        const v = getByPath(I18N[L], path);
        return v !== undefined ? v : path;
    }

    function buildAtlasRegions(lang) {
        const pack = I18N[lang].atlas;
        return ATLAS_BASE.map((base, i) => ({
            pickColor: base.pickColor,
            coralArea: base.coralArea,
            healthyPct: base.healthyPct,
            riskKey: base.riskKey,
            name: pack.names[i],
            risk: pack.riskText[base.riskKey]
        }));
    }

    function atlasRiskClass(riskKey) {
        const map = {
            veryHigh: 'append-atlas-risk-vh',
            mediumHigh: 'append-atlas-risk-mh',
            high: 'append-atlas-risk-h',
            low: 'append-atlas-risk-l',
            medium: 'append-atlas-risk-m'
        };
        return map[riskKey] || 'append-atlas-risk-m';
    }

    function updateAtlasLegend(lang) {
        const root = document.getElementById('append-root');
        if (!root) return;
        const names = I18N[lang].atlas.names;
        root.querySelectorAll('.append-region-item').forEach((li, i) => {
            const swatch = li.querySelector('.append-region-swatch');
            if (!swatch || i >= names.length) return;
            li.textContent = '';
            li.appendChild(swatch);
            li.appendChild(document.createTextNode(names[i]));
        });
    }

    function applyJournal(lang) {
        const editor = document.getElementById('editor');
        if (!editor) return;
        editor.innerText = I18N[lang].ch2.journal;
        editor.dataset.processed = 'false';
        if (typeof window.__ohScanText === 'function') window.__ohScanText();
    }

    function ensureFlourishEmbedScript(done) {
        if (typeof global.Flourish !== 'undefined' && typeof global.Flourish.loadEmbed === 'function') {
            done();
            return;
        }
        let script = document.querySelector('script[data-oh-flourish-embed]');
        if (script) {
            script.addEventListener('load', done, { once: true });
            return;
        }
        script = document.createElement('script');
        script.src = 'https://public.flourish.studio/resources/embed.js';
        script.setAttribute('data-oh-flourish-embed', '1');
        script.addEventListener('load', done, { once: true });
        document.head.appendChild(script);
    }

    function forceReloadIframe(iframe, url) {
        if (!iframe || !url) return;
        iframe.src = 'about:blank';
        iframe.src = url;
    }

    function findCauseChart(block) {
        const inBlock = block.querySelector('.cause-chart');
        if (inBlock) return inBlock;
        const modal = document.getElementById('ocean-narr-chart-modal');
        const modalBody = document.getElementById('ocean-narr-chart-modal-body');
        if (
            modal &&
            modal.classList.contains('is-open') &&
            modal.dataset.openCause === block.dataset.cause &&
            modalBody
        ) {
            return modalBody.querySelector('.cause-chart');
        }
        return null;
    }

    function mountFlourishInWrap(wrap, cfg) {
        if (!wrap || !cfg || !cfg.flourishSrc) return;
        wrap.innerHTML = '';
        const el = document.createElement('div');
        el.className = 'flourish-embed' + (cfg.flourishClass ? ' ' + cfg.flourishClass : '');
        el.setAttribute('data-src', cfg.flourishSrc);

        const ns = document.createElement('noscript');
        if (cfg.flourishThumb) {
            ns.innerHTML =
                '<img src="' + cfg.flourishThumb + '" width="100%" alt="' + (cfg.noscriptAlt || '') + '" />';
        }
        el.appendChild(ns);
        wrap.appendChild(el);

        ensureFlourishEmbedScript(function () {
            if (typeof global.Flourish.loadEmbed === 'function') {
                global.Flourish.loadEmbed(el);
            }
        });
    }

    function applyOceanCauses(lang) {
        const pack = I18N[lang].append.ocean;
        const ids = ['warming', 'acid', 'pollution', 'overfish'];
        ids.forEach((id, i) => {
            const block = document.getElementById('ocean-narr-label-' + id);
            if (!block || !pack.causes[i]) return;
            const c = pack.causes[i];
            const kicker = block.querySelector('.cause-kicker');
            const desc = block.querySelector('.cause-desc');
            const hint = block.querySelector('.cause-head-hint');
            const chart = findCauseChart(block);
            const link = chart ? chart.querySelector('.cause-chart-link') : block.querySelector('.cause-chart-link');
            if (kicker) kicker.textContent = c.kicker;
            if (desc) desc.textContent = c.desc;
            if (hint) hint.textContent = pack.viewCharts;
            if (link) {
                link.textContent = pack.chartLink;
                if (c.chartUrl) link.href = c.chartUrl;
            }
            if (chart && c.chartUrl) {
                const iframes = chart.querySelectorAll('iframe');
                for (let j = iframes.length - 1; j > 0; j--) iframes[j].remove();
                const target = chart.querySelector('iframe');
                if (target) {
                    target.setAttribute('title', c.iframeTitle);
                    forceReloadIframe(target, c.chartUrl);
                }
            }
        });
        const closeBtn = document.querySelector('[data-ocean-narr-close-modal].chart-modal-close');
        if (closeBtn) closeBtn.setAttribute('aria-label', pack.closeModal);
        const oceanSection = document.getElementById('append-ocean-narrative');
        if (oceanSection) oceanSection.setAttribute('aria-label', pack.aria);
    }

    function applyFlourishEmbeds(lang) {
        const root = document.getElementById('append-root');
        if (!root) return;
        const entries = [
            { wrap: root.querySelector('#append-bleaching-section .append-flourish-wrap'), cfg: I18N[lang].append.bleaching },
            { wrap: root.querySelector('#append-timeline-section .append-flourish-wrap'), cfg: I18N[lang].append.radar }
        ];
        entries.forEach(({ wrap, cfg }) => {
            mountFlourishInWrap(wrap, cfg);
        });
    }

    function applyDomI18n(lang) {
        const pack = I18N[lang];
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const v = getByPath(pack, el.getAttribute('data-i18n'));
            if (v !== undefined) el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const v = getByPath(pack, el.getAttribute('data-i18n-html'));
            if (v !== undefined) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const v = getByPath(pack, el.getAttribute('data-i18n-placeholder'));
            if (v !== undefined) el.setAttribute('placeholder', v);
        });
        document.querySelectorAll('[data-i18n-value]').forEach((el) => {
            const v = getByPath(pack, el.getAttribute('data-i18n-value'));
            if (v !== undefined) el.value = v;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const v = getByPath(pack, el.getAttribute('data-i18n-aria'));
            if (v !== undefined) el.setAttribute('aria-label', v);
        });
        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const v = getByPath(pack, el.getAttribute('data-i18n-title'));
            if (v !== undefined) el.setAttribute('title', v);
        });
        document.querySelectorAll('.lang-toggle').forEach((btn) => {
            btn.textContent = pack.langToggle;
            btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
        });
    }

    function updateLangCriticalCss(lang) {
        var css = lang === 'zh'
            ? 'html .text-en{display:none!important}html .text-zh{display:revert}'
            : 'html .text-zh{display:none!important}html .text-en{display:revert}';
        var el = document.getElementById('oh-lang-critical');
        if (!el) {
            el = document.createElement('style');
            el.id = 'oh-lang-critical';
            document.head.appendChild(el);
        }
        el.textContent = css;
    }

    function applyLanguage(lang) {
        if (!I18N[lang]) lang = 'zh';
        currentLang = lang;
        try { localStorage.setItem('oh-lang', lang); } catch (_) { /* ignore */ }
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        document.documentElement.classList.toggle('oh-lang-zh', lang === 'zh');
        document.documentElement.classList.toggle('oh-lang-en', lang === 'en');
        updateLangCriticalCss(lang);
        document.title = I18N[lang].meta.title;
        applyDomI18n(lang);
        applyJournal(lang);
        updateAtlasLegend(lang);
        applyOceanCauses(lang);
        applyFlourishEmbeds(lang);
        global.__ohAtlasRegions = buildAtlasRegions(lang);
        global.dispatchEvent(new CustomEvent('oh-lang-change', { detail: { lang } }));
        requestAnimationFrame(function () {
            global.dispatchEvent(new Event('resize'));
        });
    }

    function toggleLanguage() {
        applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
    }

    function bindLangToggles() {
        document.querySelectorAll('.lang-toggle').forEach(function (btn) {
            if (btn.dataset.ohBound === '1') return;
            btn.dataset.ohBound = '1';
            btn.addEventListener('click', toggleLanguage);
        });
    }

    function initOhI18n() {
        var lang = 'zh';
        if (global.__ohBootLang === 'en' || global.__ohBootLang === 'zh') {
            lang = global.__ohBootLang;
        } else {
            try {
                var stored = localStorage.getItem('oh-lang');
                if (stored === 'en' || stored === 'zh') lang = stored;
            } catch (_) { /* ignore */ }
        }
        bindLangToggles();
        applyLanguage(lang);
    }

    global.OH_I18N = I18N;
    global.OH_ATLAS_BASE = ATLAS_BASE;
    global.getOhLang = getOhLang;
    global.ohT = t;
    global.buildAtlasRegions = buildAtlasRegions;
    global.atlasRiskClassByKey = atlasRiskClass;
    global.applyOhLanguage = applyLanguage;
    global.toggleOhLanguage = toggleLanguage;
    global.__ohAtlasRegions = buildAtlasRegions('zh');

    // [双语加载时序] DOMContentLoaded 第一时间绑定切换按钮，不等待其他资源
    function onDomReady() {
        bindLangToggles();
        initOhI18n();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onDomReady);
    } else {
        onDomReady();
    }
})(typeof window !== 'undefined' ? window : globalThis);

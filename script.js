document.addEventListener('DOMContentLoaded', () => {
    const erasData = [
        {
            id: "0",
            period: "2000–2003",
            title: "黎明期",
            subtitle: "VOCALOID技術の研究開発 (DAISY)",
            features: [
                "VOCALOID技術の研究開発がヤマハで本格的にスタート",
                "VOCALOID自体はまだ一般公開されていないが、基礎が作られる",
                "VOCALOIDそのものの「準備期間」"
            ],
            startYear: 2000,
            endYear: 2003
        },
        {
            id: "1",
            period: "2004–2007",
            title: "商用開始＆初期波",
            subtitle: "MEIKO/KAITO/初音ミク登場",
            features: [
                "英語VOCALOID（Leon & Lola）が一般公開（2004）",
                "日本語音源 MEIKO／KAITO 登場（2004〜2006頃）",
                "VOCALOID2登場＆初音ミク が発売し、文化として拡散開始（2007）"
            ],
            startYear: 2004,
            endYear: 2007
        },
        {
            id: "2",
            period: "2008–2011",
            title: "ネット黄金期",
            subtitle: "ニコニコ文化とVOCALOID音楽の爆発的広がり",
            features: [
                "VOCALOID曲多数投稿、独自シーン形成（2008〜）",
                "他ボイスバンクやクリエイターの増加",
                "VOCALOID3発表や多様な音源リリースの時期"
            ],
            startYear: 2008,
            endYear: 2011
        },
        {
            id: "3",
            period: "2012–2015",
            title: "成熟・世界への広がり",
            subtitle: "「世界で愛されるボカロ」へ深化",
            features: [
                "多言語・高音質モデルの登場（IA等）",
                "海外イベントやコンサートへ広がる動き（例：Miku Expoなど）",
                "VOCALOID文化の成熟と多様化進展"
            ],
            startYear: 2012,
            endYear: 2015
        },
        {
            id: "4",
            period: "2016–2019",
            title: "商業深化＆技術進化",
            subtitle: "商業展開と技術成熟期",
            features: [
                "VOCALOID4以降の機能強化・新モデルリリース進行",
                "初音ミク10周年など記念イベント多数",
                "コラボ・ゲーム・公式展開活発化"
            ],
            startYear: 2016,
            endYear: 2019
        },
        {
            id: "5",
            period: "2020–2023",
            title: "AI時代＆新ボカロ文化",
            subtitle: "AI技術との融合と新規創作シーン",
            features: [
                "VOCALOID5世代提供やAI統合の動き加速",
                "音楽・世界的アーカイブ拡張",
                "YouTubeなど外部プラットフォーム人気上昇"
            ],
            startYear: 2020,
            endYear: 2023
        },
        {
            id: "6",
            period: "2024–2027",
            title: "未来進展期",
            subtitle: "次世代へ向かう進化と多様な展開",
            features: [
                "VOCALOID 20周年以降の新動向（AI音源リリース等）",
                "未来の技術・文化が本格始動"
            ],
            startYear: 2024,
            endYear: 2027
        }
    ];

    const rankingData = [
        { rank: 1, title: "少女A", videoId: "AqI97zHMoQw", status: "(20240714)", pubDate: "20131017", type: "normal" },
        { rank: 2, title: "メズマライザー", videoId: "19y8YTbvri8", status: "(20241117)", pubDate: "20240427", type: "fastest" },
        { rank: 3, title: "グッバイ宣言", videoId: "dHXC_ahjtEE", status: "(20220727)", pubDate: "20200413", type: "normal" },
        { rank: 4, title: "ECHO", videoId: "cQKGUgOfD8U", status: "(20240422)", pubDate: "20141008", type: "normal" },
        { rank: 5, title: "愛して愛して愛して", videoId: "NTrm_idbhUk", status: "(20241101)", pubDate: "20150306", type: "normal" },
        { rank: 6, title: "強風オールバック", videoId: "D6DVTLvOupE", status: "(20241102)", pubDate: "20230315", type: "normal" },
        { rank: 7, title: "ラビットホール", videoId: "eSW2LVbPThw", status: "(20250907)", pubDate: "20230519", type: "normal" },
        { rank: 8, title: "テトリス", videoId: "Soy4jGPHr3g", status: "(20251201)", pubDate: "20241108", type: "new" },
        { rank: 9, title: "モニタリング", videoId: "kbNdx0yqbZE", status: "(20251231)", pubDate: "20241122", type: "new" },
        { rank: 10, title: "KING", videoId: "cm-l2h6GB8Q", status: "(20251204)", pubDate: "20200802", type: "new" },
        { rank: 11, title: "きゅうくらりん", videoId: "2b1IexhKPz4", status: "(20260205)", pubDate: "20210829", type: "new" },
        { rank: 12, title: "オーバーライド", videoId: "LLjfal8jCYI", status: "(予測3月後半)", pubDate: "20231129", type: "pending" },
        { rank: 12, title: "ヴァンパイア", videoId: "e1xCOsgWG0M", status: "(予測5月後半)", pubDate: "20210309", type: "pending" },
        { rank: 14, title: "砂の惑星", videoId: "AS4q9yaWJkI", status: "(予測8月後半)", pubDate: "20170721", type: "pending" },
        { rank: 15, title: "ラグトレイン", videoId: "UnIhRpIT7nc", status: "(予測8月中期)", pubDate: "20200716", type: "pending" },
        { rank: 16, title: "神っぽいな", videoId: "EHBFKhLUVig", status: "(予測9月前半)", pubDate: "20210917", type: "pending" },
        { rank: 17, title: "ロキ", videoId: "Xg-qfsKN2_E", status: "(予測2027年2月中期)", pubDate: "20180227", type: "pending" },
        { rank: 18, title: "ロストアンブレラ", videoId: "DeKLpgzh-qQ", status: "(予測2027年2月後期)", pubDate: "20180227", type: "pending" },
        { rank: 19, title: "混沌ブギ", videoId: "1Swg-aBO9eY", status: "(予測6月後半)", pubDate: "20230830", type: "pending" },
        { rank: 20, title: "BUTCHER VANITY", videoId: "vjBFftpQxxM", status: "(予測5月中期)", pubDate: "20240328", type: "pending" },
        { rank: 21, title: "脳漿炸裂ガール", videoId: "Ey_NHZNYTeE", status: "(予測2028年8月)", pubDate: "20130328", type: "pending" },
        { rank: 22, title: "ヒバナ", videoId: "hxSg2Ioz3LM", status: "(予測2028年1月)", pubDate: "20170804", type: "pending" },
        { rank: 23, title: "マトリョシカ", videoId: "HOz-9FzIDf0", status: "(予測2029年2月)", pubDate: "20131002", type: "pending" },
        { rank: 24, title: "千本桜", videoId: "shs0rAiwsGQ", status: "(予測2029年2月)", pubDate: "20141202", type: "pending" },
        { rank: "伝説", title: "Nyanyanyanyanyanyanya!もしくはNyan Cat (Combined)", videoId: "QH2-TGUlwu4", videoIds: ["QH2-TGUlwu4", "2yJgwwDcgV8", "LfKCLdPTqtM", "RZzvY-xqqFQ", "eI4pbCQLClA", "yarCP79fUts", "8aNBXUoZWF4"], status: "複数動画合計 (Youtubeのみ)", pubDate: "20100725", type: "legend" }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    const rankingBody = document.getElementById('ranking-body');

    if (timelineContainer) {
        // Render Eras
        erasData.forEach(era => {
            const card = document.createElement('div');
            card.className = 'era-card';
            // highlight future era
            if (era.id === "6") {
                card.style.borderColor = "var(--accent-secondary)";
            }

            let featuresHtml = '<ul class="era-description-list">';
            era.features.forEach(f => {
                featuresHtml += `<li>${f}</li>`;
            });
            featuresHtml += '</ul>';

            card.innerHTML = `
                <div class="era-id">${era.id}</div>
                <div class="era-period">${era.period}</div>
                <h3 class="era-title">${era.title}<br><span style="font-size:0.8em; color:#aaa; font-weight:400;">${era.subtitle}</span></h3>
                ${featuresHtml}
            `;
            timelineContainer.appendChild(card);
        });
    }

    // Helper: Determine Era ID from Date string (YYYYMMDD) or Year
    const getEraFromDate = (dateStr) => {
        if (!dateStr) return "Unknown";
        let year = 0;
        let month = 0;

        if (dateStr.length === 8) {
            year = parseInt(dateStr.substring(0, 4));
            month = parseInt(dateStr.substring(4, 6)); // Not strictly needed for year-based eras, but good for precision if needed later
        } else if (dateStr.length === 4) {
            year = parseInt(dateStr);
        } else {
            return "Unknown";
        }

        const foundEra = erasData.find(e => year >= e.startYear && year <= e.endYear);
        return foundEra ? `第${foundEra.id}季 ${foundEra.title}` : `その他 (${year})`;
    };

    if (rankingBody) {
        (async () => {
            // Loading indicator
            const loadingRow = document.createElement('tr');
            loadingRow.innerHTML = '<td colspan="5" style="text-align:center; padding:2rem; color:#aaa;">Loading view counts and sorting...</td>';
            rankingBody.appendChild(loadingRow);

            // Fetch views
            const fetchViews = async (videoId) => {
                try {
                    const res = await fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`);
                    const data = await res.json();
                    return parseInt(data.viewCount || 0);
                } catch (err) {
                    console.error(`Error fetching views for ${videoId}:`, err);
                    return 0;
                }
            };

            // Process all items
            await Promise.all(rankingData.map(async (item) => {
                if (item.videoIds) {
                    // Combined
                    const counts = await Promise.all(item.videoIds.map(vid => fetchViews(vid)));
                    item.viewCount = counts.reduce((a, b) => a + b, 0);
                } else if (item.videoId) {
                    item.viewCount = await fetchViews(item.videoId);
                } else {
                    item.viewCount = 0;
                }
            }));

            // Sort by view count descending
            rankingData.sort((a, b) => b.viewCount - a.viewCount);

            // Clear loading
            rankingBody.innerHTML = '';

            // Render
            let currentRank = 1;
            rankingData.forEach((item, index) => {
                const row = document.createElement('tr');

                let statusClass = 'status-default';
                if (item.type === 'legend') statusClass = 'status-legendary';
                else if (item.status.includes("予測") || item.status.includes("未達成")) statusClass = 'status-default';
                else statusClass = 'status-new';

                // Format dates
                const formatDate = (d) => {
                    if (/^\d{8}$/.test(d)) {
                        return `${d.substring(0, 4)}/${d.substring(4, 6)}/${d.substring(6, 8)}`;
                    }
                    return d;
                };

                const displayPubDate = formatDate(item.pubDate);
                const eraDisplay = getEraFromDate(item.pubDate);

                let displayStatusText = item.status;
                // Clean up status display
                displayStatusText = displayStatusText.replace(/^\((\d{8})\)$/, (match, p1) => formatDate(p1));
                displayStatusText = displayStatusText.replace("(", "").replace(")", "");

                // Determine Rank Display
                let rankDisplayValue;
                const isExcluded = item.title.includes("Nyan Cat") || item.title.includes("Nyanyanyanyanyanyanya!");

                if (isExcluded) {
                    rankDisplayValue = item.rank; // Keep original "伝説"
                } else {
                    rankDisplayValue = currentRank++;
                }

                const displayStatus = `<span class="status-badge ${statusClass}">${item.status}</span>`;
                const displayRank = `<span class="rank-cell" style="${item.type === 'legend' ? 'color:gold; font-size:0.9rem;' : ''}">${rankDisplayValue}</span>`;

                row.innerHTML = `
                    <td>${displayRank}</td>
                    <td class="song-title-cell">
                        <a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank" style="color:inherit; text-decoration:none; display:block;">
                        ${item.title}
                        <div style="font-size:0.75rem; color:#888; margin-top:4px;">Pub: ${displayPubDate}</div>
                        </a>
                    </td>
                    <td>${displayStatus}</td>
                    <td style="font-size:0.85rem; color:#aaa;">${eraDisplay}</td>
                    <td class="views-cell" style="font-family:monospace; color:#fff;">${item.viewCount.toLocaleString()}</td>
                `;
                rankingBody.appendChild(row);
            });
        })();
    }
});

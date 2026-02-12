document.addEventListener('DOMContentLoaded', () => {
    const erasData = [
        {
            id: "0",
            period: "2003～2006",
            title: "原初期（プロト・ボカロ時代）",
            subtitle: "VOCALOID以前～黎明直前",
            features: [
                "合成音声・DTM実験の時代",
                "まだ“文化”ではなく「技術と遊び」",
                "のちの表現手法・作家思想の原型がここで生まれる"
            ]
        },
        {
            id: "1",
            period: "2006～2010",
            title: "黎明期～初期黄金期",
            subtitle: "初音ミク登場（2007）",
            features: [
                "ニコニコ動画を中心に爆発的拡散",
                "職人文化・タグ文化・コメント文化が確立",
                "“ボカロP”という概念が定着"
            ]
        },
        {
            id: "2",
            period: "2010～2014",
            title: "黄金期（ニコニコ全盛時代）",
            subtitle: "ニコニコ動画中心の完全黄金期",
            features: [
                "名曲・古典が大量誕生",
                "今なおランキング・再生数上位に残る曲が多い",
                "ライブ・CD・商業展開が本格化"
            ]
        },
        {
            id: "3",
            period: "2014～2018",
            title: "海外拡散期（グローバル化）",
            subtitle: "YouTubeが主戦場に移行",
            features: [
                "海外リスナーが急増",
                "英語圏・多言語圏での人気が本格化",
                "サブカルから“世界的ネット音楽”へ"
            ]
        },
        {
            id: "4",
            period: "2018～2022",
            title: "現代前期（ショート動画侵入期）",
            subtitle: "TikTok・Shorts時代突入",
            features: [
                "フレーズ単位での消費が加速",
                "爆発的ヒット曲が複数誕生",
                "ボカロPの世代交代が顕著"
            ]
        },
        {
            id: "5",
            period: "2022～2026",
            title: "現代後期・高速成長期",
            subtitle: "成長速度が過去最高水準",
            features: [
                "1～2年で1億再生（100M）が普通",
                "ボカロ × VTuber × ショート動画の融合",
                "“ネット音楽の標準言語”として定着"
            ]
        }
    ];

    const rankingData = [
        { rank: 1, title: "少女A", videoId: "AqI97zHMoQw", status: "(20240714)", pubDate: "20131017", era: "② 2010～2014（黄金期）", type: "normal" },
        { rank: 2, title: "メズマライザー", videoId: "19y8YTbvri8", status: "(20241117)", pubDate: "20240427", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "fastest" },
        { rank: 3, title: "グッバイ宣言", videoId: "dHXC_ahjtEE", status: "(20220727)", pubDate: "20200413", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "normal" },
        { rank: 4, title: "ECHO", videoId: "cQKGUgOfD8U", status: "(20240422)", pubDate: "20141008", era: "② 2010～2014（黄金期）", type: "normal" },
        { rank: 5, title: "愛して愛して愛して", videoId: "NTrm_idbhUk", status: "(20241101)", pubDate: "20150306", era: "③ 2014～2018（海外拡散期）", type: "normal" },
        { rank: 6, title: "強風オールバック", videoId: "D6DVTLvOupE", status: "(20241102)", pubDate: "20230315", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "normal" },
        { rank: 7, title: "ラビットホール", videoId: "eSW2LVbPThw", status: "(20250907)", pubDate: "20230519", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "normal" },
        { rank: 8, title: "テトリス", videoId: "Soy4jGPHr3g", status: "(20251201)", pubDate: "20241108", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "new" },
        { rank: 9, title: "モニタリング", videoId: "kbNdx0yqbZE", status: "(20251231)", pubDate: "20241122", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "new" },
        { rank: 10, title: "KING", videoId: "cm-l2h6GB8Q", status: "(20251204)", pubDate: "20200802", era: "④ 2018～2022（現代前期）", type: "new" },
        { rank: 11, title: "きゅうくらりん", videoId: "2b1IexhKPz4", status: "(20260205)", pubDate: "20210829", era: "④ 2018～2022（現代前期）", type: "new" },
        { rank: 12, title: "オーバーライド", videoId: "LLjfal8jCYI", status: "(予測3月後半)", pubDate: "20231129", era: "④ 2018～2022（現代前期）", type: "pending" },
        { rank: 12, title: "ヴァンパイア", videoId: "e1xCOsgWG0M", status: "(予測5月後半)", pubDate: "20210309", era: "④ 2018～2022（現代前期）", type: "pending" },
        { rank: 14, title: "砂の惑星", videoId: "AS4q9yaWJkI", status: "(予測8月後半)", pubDate: "20170721", era: "③ 2014～2018（海外拡散期）", type: "pending" },
        { rank: 15, title: "ラグトレイン", videoId: "UnIhRpIT7nc", status: "(予測8月中期)", pubDate: "20200716", era: "④ 2018～2022（現代前期）", type: "pending" },
        { rank: 16, title: "神っぽいな", videoId: "EHBFKhLUVig", status: "(予測9月前半)", pubDate: "20210917", era: "④ 2018～2022（現代前期）", type: "pending" },
        { rank: 17, title: "ロキ", videoId: "Xg-qfsKN2_E", status: "(予測2027年2月中期)", pubDate: "20180227", era: "③ 2014～2018（海外拡散期）", type: "pending" },
        { rank: 18, title: "ロストアンブレラ", videoId: "DeKLpgzh-qQ", status: "(予測2027年2月後期)", pubDate: "20180227", era: "③ 2014～2018（海外拡散期）", type: "pending" },
        { rank: 19, title: "混沌ブギ", videoId: "1Swg-aBO9eY", status: "(予測6月後半)", pubDate: "20230830", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "pending" },
        { rank: 20, title: "BUTCHER VANITY", videoId: "vjBFftpQxxM", status: "(予測5月中期)", pubDate: "20240328", era: "⑤ 2022～2026（現代後期・高速成長期）", type: "pending" },
        { rank: 21, title: "脳漿炸裂ガール", videoId: "_yJpE2c_FjA", status: "(予測2028年8月)", pubDate: "20130328", era: "② 2010～2014（黄金期）", type: "pending" },
        { rank: 22, title: "ヒバナ", videoId: "hxSg2Ioz3LM", status: "(予測2028年1月)", pubDate: "20170804", era: "③ 2014～2018（海外拡散期）", type: "pending" },
        { rank: 23, title: "マトリョシカ", videoId: "HOz-9FzIDf0", status: "(予測2029年2月)", pubDate: "20131002", era: "② 2010～2014（黄金期）", type: "pending" },
        { rank: 24, title: "千本桜", videoId: "shs0rAiwsGQ", status: "(予測2029年2月)", pubDate: "20141202", era: "② 2010～2014（黄金期）", type: "pending" },
        { rank: "伝説", title: "Nyanyanyanyanyanyanya! Nyan cat", videoId: "QH2-TGUlwu4", status: "転載を含む。(20130726)", pubDate: "20100725", era: "① 2004～2010（黎明期～初期黄金期）", type: "legend" }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    const rankingBody = document.getElementById('ranking-body');

    // Render Eras
    erasData.forEach(era => {
        const card = document.createElement('div');
        card.className = 'era-card';

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

    // Render Ranking and Fetch Views
    rankingData.forEach(async (item, index) => {
        const row = document.createElement('tr');

        let statusClass = 'status-default';
        // Simplified status coloring
        if (item.type === 'legend') statusClass = 'status-legendary';
        else if (item.status.includes("予測") || item.status.includes("未達成")) statusClass = 'status-default'; // Default for pending
        else statusClass = 'status-new'; // Achieved dates considered "done/new"

        // Format dates if they look like YYYYMMDD to YYYY/MM/DD
        const formatDate = (d) => {
            if (/^\d{8}$/.test(d)) {
                return `${d.substring(0, 4)}/${d.substring(4, 6)}/${d.substring(6, 8)}`;
            }
            return d;
        };

        const displayPubDate = formatDate(item.pubDate);

        let displayStatusText = item.status;
        // Clean up status display if it's just a date in parens
        displayStatusText = displayStatusText.replace(/^\((\d{8})\)$/, (match, p1) => formatDate(p1));
        displayStatusText = displayStatusText.replace("(", "").replace(")", ""); // specialized cleanup

        const displayStatus = `<span class="status-badge ${statusClass}">${item.status}</span>`;
        const displayRank = `<span class="rank-cell" style="${item.type === 'legend' ? 'color:gold; font-size:0.9rem;' : ''}">${item.rank}</span>`;

        row.innerHTML = `
            <td>${displayRank}</td>
            <td class="song-title-cell">
                <a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank" style="color:inherit; text-decoration:none; display:block;">
                ${item.title}
                <div style="font-size:0.75rem; color:#888; margin-top:4px;">Pub: ${displayPubDate}</div>
                </a>
            </td>
            <td>${displayStatus}</td>
            <td style="font-size:0.85rem; color:#aaa;">${item.era}</td>
            <td class="views-cell" id="views-${item.videoId}" style="font-family:monospace; color:var(--accent-primary);">Fetching...</td>
        `;
        rankingBody.appendChild(row);

        // Fetch View Count
        if (item.videoId) {
            try {
                // Using Return YouTube Dislike API as a reliable public proxy for view counts
                const response = await fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${item.videoId}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const viewCount = data.viewCount;
                if (viewCount) {
                    const el = document.getElementById(`views-${item.videoId}`);
                    if (el) {
                        el.textContent = parseInt(viewCount).toLocaleString();
                        el.style.color = "#fff"; // Brighten when loaded
                    }
                }
            } catch (error) {
                console.error(`Failed to fetch views for ${item.title}:`, error);
                const el = document.getElementById(`views-${item.videoId}`);
                if (el) el.textContent = "---";
            }
        }
    });
});

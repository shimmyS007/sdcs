# 四渡赤水：战略的主动权

## Project
- Format: 1920×1080, 16:9, 30fps, approximately 240 seconds
- Output: silent H.264 MP4, no narration, music, or sound effects
- Visual language: archival military-documentary style; charcoal terrain relief, parchment map details, restrained red/blue force markers, cinematic camera movement, readable simplified-Chinese typography
- Historical caution: diagrams are schematic, not georeferenced troop deployment; validate dates and crossing points against historical references before release
- Source studio: [OpenMotion](https://github.com/nexu-io/openmotion)
- Status: storyboard specification only; not yet an imported native OpenMotion project

## Design
- Deep ink #0b1118, parchment #e4c38c, red army #d74940, opposing forces #567ba2
- Map terrain must not obscure captions. Avoid repeated slide layouts.
- Every crossing gets a distinct camera movement and route reveal.
- Use a progress bar, date plate, strategic-intent callout and a short chapter title.
- All captions in Chinese. Never fabricate Mao quotations.

## Shot list (Motion.md storyboard)
| Time | Shot | Visual and motion | Caption |
|---|---|---|---|
| 00:00–00:14 | Opening | Topographic terrain emerges from darkness, river line illuminates; title resolves | 四渡赤水 / 战略的主动权 |
| 00:14–00:42 | Strategic predicament | Pull back to surrounding enemy formations, red army marker under pressure | 遵义会议后，中央红军面临严峻围追堵截 |
| 00:42–01:13 | First crossing | Camera pans west; route crosses river, date and crossing markers appear | 一渡赤水 · 1935年1月29日 |
| 01:13–01:44 | Second crossing | Fast reverse movement east, terrain zoom to northern Guizhou | 二渡赤水 · 1935年2月18日至21日 |
| 01:44–02:15 | Return to northern Guizhou | Dynamic counters, highlighted Loushan Pass/Zunyi battles | 回师黔北 · 娄山关与遵义战斗 |
| 02:15–02:46 | Third crossing | Move west near Maotai; opposing counters shift in response | 三渡赤水 · 1935年3月16日至17日 |
| 02:46–03:17 | Fourth crossing | Reversal to east; map traces mobile maneuvers | 四渡赤水 · 1935年3月21日至22日 |
| 03:17–03:45 | Breaking the encirclement | Route moves south across Wu River, then west toward Yunnan/Jinsha River | 调动敌军 · 争取主动 |
| 03:45–04:00 | Strategic synthesis | Four routes briefly overlay then fade into title | 实事求是 · 避实击虚 · 灵活机动 |

## Production constraints
1. Use OpenMotion's actual native HTML/JS composition structure and export tools after its runtime is installed; do not assume this Markdown file itself is directly importable as a video.
2. Confirm terrain, river direction, place names, chronology and the command structure from reliable sources.
3. No audio tracks. Final artifact must be an actual playable MP4.
4. Preserve existing Remotion prototype in src/ as reference until a verified OpenMotion export replaces it.

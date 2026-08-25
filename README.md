# TOKAI Conquest V6

TOKAI Conquest V6は、Battlefield Portal向けのカスタムコンクエストです。通常は安定版かつLatestの **2.4.0** を使用してください。**2.5.0** は、標準Objective HUDを暫定採用したプレリリースです。

- [日本語の詳しい案内](README-JP.md)
- [安定版2.4.0をダウンロード](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/download/v2.4.0/tokai-conquest-2.4.0-release.zip)
- [プレリリース2.5.0をダウンロード](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/download/v2.5.0/tokai-conquest-2.5.0-release.zip)

## バージョンの選び方

| 項目 | 2.4.0 | 2.5.0 |
| --- | --- | --- |
| 公開状態 | 安定版・Latest | 暫定プレリリース・Latestではない |
| 推奨用途 | 通常のホスト | 標準Objective HUDの評価 |
| 拠点表示 | 従来の独自拠点表示 | 標準Objective HUDを有効化し、重複する従来表示だけを除去 |
| 検証状態 | 公開時の新規実機試験なし（静的検証合格） | Capstoneの拠点A～FとIberianが合格。残る5マップは `TEST ENVIRONMENT BLOCKED / SUSPENDED` |
| スコアシステム | 現行仕様 | 変更なし |

2.5.0で問題がある場合は、[Latestの2.4.0](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/latest)へ戻してください。

マップだけが必要で、v2.3.0の対応するスクリプトとStrings JSONを別途使用する場合は、過去の補助パッケージ[Seven Map Pack v1.0.0](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/map-pack-v1.0.0)（[ZIPを直接ダウンロード](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/download/map-pack-v1.0.0/tokai-conquest-seven-map-pack-v1.0.0.zip)）を選べます。このZIPにはスクリプトとStrings JSONが含まれません。現行セットとは混在させないでください。特に、補助パックはAftermath 1.1とCapstone 1.2.2、2.4.0／2.5.0はAftermath 1.2とCapstone 1.5です。

## Andy基準版からの主な変更

ここでいうAndy基準版は、過去に取り込み、V11として統合したAndy Custom Conquestの保存済み基準ソースです。現在公開されている[Andy Custom Conquest Template](https://bfportal.gg/experiences/custom-conquest-template/)は、それより新しい版です。

独立したV12全体の正本と、Andy基準版に対応するMAPファイルは保存されていません。そのため、V12全体やAndyのMAP設定との差は推測せず、基準ソースから確認できる範囲だけを比較します。

| 機能 | Andy基準版 | TOKAI Conquestでの動作 |
| --- | --- | --- |
| ゲーム開始時のチーム分け | 人間プレイヤーを自動で均等に分ける処理はありません。 | 人間プレイヤーをランダムかつ均等に振り分けます。 |
| 途中参加時のチーム分け | 現在の人数差に応じた自動配属はありません。 | 現在の人間プレイヤー数を確認し、人数差が0～1人なら最初に割り当てられたチームの反対側へ、2人以上なら人数の少ないチームへ一度だけ振り分けます。 |
| 昼夜とNVG | 昼夜抽選とNVG付与は任意機能で、初期設定では無効です。 | 各ラウンドで夜戦を15％の確率で選択し、同じスクリプトが動作している間は夜戦を連続させません。夜戦時は、初回出撃、マッチ開始後参加、再出撃の際にNVGを付与します。 |
| 手動チーム切替 | 操作地点998／999から反対チームへ切り替えます。 | 操作地点998／999を維持し、得点で優勢なチームから反対側への切替だけを許可します。 |
| 弾薬補給所 | 対応する弾薬補給処理はありません。 | 操作地点2000で弾薬を補給し、60秒の再使用待ち時間と案内表示を設けています。発光効果2300～2305は、対象が存在する場合だけ有効化します。 |
| 独自AI | 独自ボットの生成、移動、反撃、死亡後に一定時間待ってから出撃解除する処理、スコア記録を含みます。 | 独自AI機能を使用しません。 |
| MAP | 基準ソースと同時点のMAPファイルがないため、設定を直接比較できません。 | 現行7マップのGodot編集用とPortalアップロード用を各1件、合計14ファイル収録します。 |
| 2.5.0の拠点表示 | 独自の拠点表示を使用します。 | SDK 1.4.2の標準Objective HUDを有効化し、重複する独自表示だけを除去します。それ以外は2.4.0を維持します。 |

## 収録マップ

2.4.0と2.5.0には、同じ7組のMAPファイルを収録しています。

- Abbasid 2.2.3
- Aftermath 1.2
- Capstone 1.5
- Eastwood 1.2
- Iberian 1.2
- Metro 1.0
- Plaza 1.0

過去のSeven Map Pack v1.0.0と比べると、Abbasid、Eastwood、Iberian、Metro、Plazaの5組は内容がバイト単位で同一です。Aftermathは1.1から1.2へ、Capstoneは1.2.2から1.5へ更新され、どちらも `.tscn` と `.spatial.json` の両方が変わっています。公開資料には変更内容の意味が記録されていないため、設定やゲームプレイ上の違いは推測しません。

Seven Map Pack v1.0.0はマップ専用です。使用する場合は、v2.3.0の対応するスクリプトとStrings JSONが別途必要です。現行セットとは混在させないでください。

## 導入

1. 使用するマップの `.spatial.json` を対応するMAPへアップロードします。
2. Script Managerで、選んだバージョンの `.ts` をインポートします。
3. 続けて、同じバージョンの `.Strings.json` をインポートします。
4. 3ファイルが揃ったことを確認して保存します。

保存完了前にホストしないでください。`.tscn` はGodot編集用であり、Portalへはアップロードしません。異なるバージョンや異なるMAPのファイルを混在させないでください。

## 2.5.0の注意事項

Capstoneの拠点A～FとIberianは実機試験に合格しています。Abbasid、Aftermath、Eastwood、Metro、Plazaは、前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により、試験を中断しています。この事象はSDK 1.4で初めて確認し、1.4.1.5でも継続し、1.4.2.0では影響がより顕著になりました。通常の試合完了時とAdminによる次マップへの切替時の両方で発生し、最大5マップ先まで残る状態を確認しています。これは2.5.0の機能不合格とは判定していません。

スコアシステムへの変更は凍結しています。SDKで未対応のスコア統合機能に、独自の代替実装は追加していません。

通常利用者は、各ReleaseのAssets欄にある手動アップロードZIPを使用してください。GitHub自動生成の **Source code (zip)** と **Source code (tar.gz)** は開発者向けの文書リポジトリ全体であり、Portal導入用ではありません。

## English summary

TOKAI Conquest V6 is a custom Conquest experience for Battlefield Portal. It uses no Custom AI.

The comparison above uses the archived Andy Custom Conquest baseline that was imported and integrated as V11. The current [Andy Custom Conquest Template](https://bfportal.gg/experiences/custom-conquest-template/) page describes a newer version. No standalone exact full V12 source or corresponding Andy baseline MAP pairs are stored here, so this page does not infer whole-V12 or Andy MAP-configuration differences.

The imported baseline has no automatic even human-team assignment or player-count-based late-join assignment. Its random day/night and NVG options are disabled by default. It uses custom objective visuals; v2.5.0 enables the SDK 1.4.2 native Objective HUD and removes only the overlapping custom objective visuals.

- Use [v2.4.0](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/latest) for the stable and Latest release.
- Use [v2.5.0](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/v2.5.0) only to evaluate the provisional native Objective HUD. It is a non-Latest prerelease; its only objective-display change is enabling the native HUD and removing the duplicate legacy custom visuals. It includes no score-system change.
- v2.5.0 runtime testing passed for Capstone objectives A-F and Iberian. The other five included maps are `TEST ENVIRONMENT BLOCKED / SUSPENDED` by the map-rotation condition described above; this is not classified as a v2.5.0 functional failure.
- Both versions include Abbasid 2.2.3, Aftermath 1.2, Capstone 1.5, Eastwood 1.2, Iberian 1.2, Metro 1.0, and Plaza 1.0.
- For a historical map-only option, use [Seven Map Pack v1.0.0](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/map-pack-v1.0.0) or its [direct ZIP](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/download/map-pack-v1.0.0/tokai-conquest-seven-map-pack-v1.0.0.zip). It has no TypeScript or Strings JSON and requires the matching v2.3.0 core pair. Do not mix it with the current set: it contains Aftermath 1.1 and Capstone 1.2.2 instead of Aftermath 1.2 and Capstone 1.5.
- Five historical/current TOKAI map pairs are byte-identical: Abbasid, Eastwood, Iberian, Metro, and Plaza. Both files changed for Aftermath 1.1 to 1.2 and Capstone 1.2.2 to 1.5. The published material does not document what those changes mean, so no configuration or gameplay explanation is inferred.
- Import one matching `.spatial.json`, then the same-version TypeScript and Strings JSON files. Save before hosting. Do not upload `.tscn` files to Portal.
- At game start, TOKAI assigns human players randomly and evenly. For a player joining after start, it checks current human counts once: at a difference of 0–1, it assigns the player opposite the initially assigned team; at 2 or more, it uses the smaller team. It removes exactly one total ticket per ordinary death, uses a 15% night chance with no consecutive night rounds in the same script runtime, and provides NVG on initial night deployment, post-start join, and redeployment. Recon Drone owner/count restrictions are fully removed. No Custom AI is used. The current package contains seven MAP pairs (14 files). v2.5.0 changes only the objective display to the native Objective HUD and otherwise retains 2.4.0 behavior.
- Compared with the imported Andy baseline, TOKAI limits manual switching through interact points 998/999 to the currently leading team moving to the other team. It also adds an ammo station at interact point 2000 with a 60-second cooldown, a player notice, and optional glow objects 2300–2305 that are enabled only when present.
- The imported Andy baseline includes custom-bot spawning, movement, retaliation, delayed undeploy behavior, and score tracking. TOKAI does not use Custom AI.
- Score-system changes are frozen. No custom substitute has been added for score integration that the SDK does not support.
- Use the manually uploaded Release ZIP. GitHub-generated Source code archives are documentation-only developer snapshots, not Portal installation packages.

See the [Japanese guide](README-JP.md), [release index](releases/README.md), and [license](LICENSE).

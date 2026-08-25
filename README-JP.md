# TOKAI Conquest V6

TOKAI Conquest V6は、Battlefield Portal向けのカスタムコンクエストです。独自AI機能は使用していません。

- [安定版2.4.0をダウンロード](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/download/v2.4.0/tokai-conquest-2.4.0-release.zip)
- [プレリリース2.5.0をダウンロード](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/download/v2.5.0/tokai-conquest-2.5.0-release.zip)
- [English summary](README.md#english-summary)

## どのバージョンを使うか

通常は、安定版かつLatestの **2.4.0** を使用してください。**2.5.0** は、SDK 1.4.2の標準Objective HUDを暫定採用した、Latestではないプレリリースです。

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
| MAP | 基準ソースと同時点のMAPファイルがないため、設定を直接比較できません。 | 現行7マップについて、Godot編集用とPortalアップロード用を各1件、合計14ファイル収録します。 |
| 2.5.0の拠点表示 | 独自の拠点表示を使用します。 | SDK 1.4.2の標準Objective HUDを有効化し、重複する独自表示だけを除去します。それ以外は2.4.0の機能を維持します。 |

## 収録マップ

2.4.0と2.5.0には、同じ7組のMAPファイルを収録しています。名称とバージョンは配布ファイル名に基づきます。

- Abbasid 2.2.3
- Aftermath 1.2
- Capstone 1.5
- Eastwood 1.2
- Iberian 1.2
- Metro 1.0
- Plaza 1.0

各マップには、Portalアップロード用の `.spatial.json` とGodot編集用の `.tscn` が1件ずつあります。

過去のSeven Map Pack v1.0.0と比べると、Abbasid、Eastwood、Iberian、Metro、Plazaの5組は内容がバイト単位で同一です。Aftermathは1.1から1.2へ、Capstoneは1.2.2から1.5へ更新され、どちらも `.tscn` と `.spatial.json` の両方が変わっています。公開資料には変更内容の意味が記録されていないため、設定やゲームプレイ上の違いは推測しません。

Seven Map Pack v1.0.0はマップ専用です。使用する場合は、v2.3.0の対応するスクリプトとStrings JSONが別途必要です。現行セットとは混在させないでください。

## 導入手順

1. 使用するマップの `.spatial.json` を対応するMAPへアップロードします。
2. Script Managerで、選んだバージョンの `.ts` をインポートします。
3. 続けて、同じバージョンの `.Strings.json` をインポートします。
4. MAP、スクリプト、文字列ファイルの3件が揃ったことを確認して保存します。

保存完了前にホストしないでください。異なるバージョンのスクリプトと文字列ファイル、または異なるMAPのファイルを混在させないでください。

`.tscn` はGodot編集用です。Portalへはアップロードしません。

## 2.5.0の検証状態と制限

- Capstoneの拠点A～FとIberianは、実機試験に合格しています。
- 残る5マップ（Abbasid、Aftermath、Eastwood、Metro、Plaza）の試験は、`TEST ENVIRONMENT BLOCKED / SUSPENDED`です。
- サーバー側のマップローテーション事象として、前のマップの戦闘エリア、境界、HQが次のマップへ残る状態を確認しています。
- この事象はSDK 1.4で初めて確認し、1.4.1.5でも継続し、1.4.2.0では影響がより顕著になりました。
- 通常の試合完了時とAdminによる次マップへの切替時の両方で発生し、最大5マップ先まで残る状態を確認しています。
- これは試験環境の阻害であり、2.5.0の機能不合格とは判定していません。

スコアシステムへの変更は凍結しています。SDKで未対応のスコア統合機能に、独自の代替実装は追加していません。

詳細は[2.5.0 Release notes](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/v2.5.0)を確認してください。

## ダウンロード時の注意

通常利用者は、各ReleaseのAssets欄にある手動アップロードZIPを使用してください。

GitHubが自動生成する **Source code (zip)** と **Source code (tar.gz)** は、この文書リポジトリ全体を収録した開発者向け資料です。Battlefield Portalの導入用パッケージではありません。

- [2.4.0 Release notes](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/v2.4.0)
- [2.5.0 Release notes](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/v2.5.0)
- [全リリース一覧](releases/README.md)
- [ライセンス](LICENSE)

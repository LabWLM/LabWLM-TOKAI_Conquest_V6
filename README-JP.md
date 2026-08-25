# TOKAI Conquest V6

TOKAI Conquest V6は、Battlefield Portal向けCustom ConquestのNo-Commander本線です。独自AI機能は使用していません。

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

## 標準からの主な変更

標準のPortal／CustomTwoTeamsの挙動を推測せず、TOKAIが追加、変更、または維持する範囲だけを示します。

| 機能 | 標準を基準にした扱い | TOKAIでの変更または維持 |
| --- | --- | --- |
| マッチ開始時のチーム | 人間プレイヤーの開始時チームを対象にします。 | 人間プレイヤーをランダムかつ均等にシャッフルします。 |
| マッチ開始後参加 | Portalが設定した初期チームと、その時点の人間プレイヤー人数差を基準にします。 | 人数差が0～1人なら初期チームの反対側へ、2人以上なら人数の少ないチームへ一度だけ配属します。 |
| 通常死亡時のチケット | 通常死亡に伴うチケット処理を対象にします。 | 通常死亡1回につき、チケットを合計で正確に1だけ減らします。 |
| 昼夜 | TOKAIが追加するラウンド制御です。 | 夜戦発生率を15％とし、同じスクリプトが動作している間は夜戦を連続させません。 |
| NVG | 初回出撃、マッチ開始後参加、死亡後の再出撃を対象にします。 | 夜戦時の各対象場面でNVGを付与します。 |
| 偵察ドローン | 標準の偵察ドローン機能を使用します。 | 所有者と使用数に関する制限を完全に撤廃します。 |
| 既存機能 | No-Commander、試合時間、チケット表示、終了画面、手動チーム切替、拠点占領、弾薬補給、戦闘エリア外、音声案内を対象にします。 | 2.4.0でこれらの既存機能を維持します。 |
| AI | Custom AIによる置換を行いません。 | 独自AI機能を使用しません。 |
| MAP | 公開パッケージで対応ファイルを配布します。 | 現行7マップについて、Godot編集用とPortalアップロード用を各1件、合計14ファイル収録します。 |
| 2.5.0の拠点表示 | SDK 1.4.2の標準Objective HUDを使用します。 | 標準Objective HUDを有効化し、重複する従来の独自拠点表示だけを除去します。それ以外は2.4.0の機能を維持します。 |

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

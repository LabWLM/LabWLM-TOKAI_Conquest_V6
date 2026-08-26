# 収録マップ / Included Maps

TOKAI Conquest 2.4.0と2.5.0の手動Release ZIPには、同一内容の7組のMAPファイルが収録されています。各組は、Portalアップロード用の `.spatial.json` とGodot編集用の `.tscn` です。

## 比較表記の読み方 / How to read the comparison

各詳細ページの比較ラベルは **比較に使用したAndy加工用TSCN（SDK 1.4.1収録）** です。比較対象はSDK 1.4.1収録ディレクトリにあるAndy加工用TSCNであり、別に配布されたAndy V12一式ではありません。同一内容のTSCNはSDK 1.4.2にも収録されています。また、SDK収録ディレクトリには対応する `.spatial.json` がありません。

このため、各ページの「基準データからの変更」はTSCNで確認できる静的構造差だけを記載します。実機上の効果や変更意図を示すものではなく、実行時事象を説明するものでもありません。Andy基準との比較と、過去のTOKAI版から現行版への比較は別項目にしています。

On each map page, the baseline is the Andy editing TSCN included with SDK 1.4.1. This is not the separate Andy V12 package; the same TSCN is also included with SDK 1.4.2, and the SDK directories contain no matching spatial JSON. The listed changes are static TSCN structure differences only; they do not claim gameplay effects or intent and do not explain runtime behavior. Historical TOKAI comparisons are listed separately.

| マップ | 内部名 | 版 | 拠点 | 案内 |
| --- | --- | --- | --- | --- |
| Abbasid | `MP_Abbasid` | 2.2.3 | A～E（5拠点） | [詳細](abbasid.md) |
| Aftermath | `MP_Aftermath` | 1.2 | A～E（5拠点） | [詳細](aftermath.md) |
| Capstone | `MP_Capstone` | 1.5 | A～F（6拠点） | [詳細](capstone.md) |
| Eastwood | `MP_Eastwood` | 1.2 | A～E（5拠点） | [詳細](eastwood.md) |
| Iberian（イベリア攻勢） | `MP_Battery` | 1.2 | A～E（5拠点） | [詳細](iberian.md) |
| Metro | `MP_Aftermath_Portal` | 1.0 | A～C（3拠点） | [詳細](metro.md) |
| Plaza（カイロ・バザール） | `MP_Plaza` | 1.0 | A～E（5拠点） | [詳細](plaza.md) |

## 共通の導入方法

1. 使用するマップの `.spatial.json` を対応するPortal MAPへアップロードします。
2. Script Managerで、使用する版の基幹 `.ts` をインポートします。
3. 続けて、同じ版の `.Strings.json` をインポートします。
4. 3ファイルが揃ったことを確認して保存します。

保存完了前にホストしないでください。`.tscn` はGodot編集用であり、Portalへはアップロードしません。異なる版の基幹ファイル、異なるマップの組、または過去のSeven Map Packの組を混在させないでください。

2.4.0は静的検証に合格していますが、公開時に新規の実機試験セッションは実施していません。2.5.0の実機試験では、Capstoneの拠点A～FとIberianが合格しています。残る5マップは、前のマップの戦闘エリア、境界、HQが次のマップへ残るサーバー側のマップローテーション事象により、`TEST ENVIRONMENT BLOCKED / SUSPENDED`です。これは各マップまたは2.5.0の機能不合格とは判定していません。静的検証の合格は、実機試験の合格を意味しません。

## English summary

The v2.4.0 and v2.5.0 manual Release ZIPs contain the same seven MAP pairs. Upload one matching `.spatial.json` to the Portal MAP, then import the same-version TypeScript and Strings JSON files. `.tscn` files are for Godot editing only. Do not mix versions, MAP pairs, or the historical Seven Map Pack with this set.

v2.4.0 passed static validation, but no new runtime session was performed at publication. For v2.5.0, runtime testing passed for Capstone objectives A–F and Iberian. Testing of the other five maps is `TEST ENVIRONMENT BLOCKED / SUSPENDED` by the documented server-side map-rotation carry-over condition, not by a confirmed functional failure of those maps or v2.5.0. Static validation does not equal runtime approval.

[トップページ](../README-JP.md) / [Landing page](../README.md) / [2.4.0 Release](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/v2.4.0) / [2.5.0 Release](https://github.com/LabWLM/LabWLM-TOKAI_Conquest_V6/releases/tag/v2.5.0)

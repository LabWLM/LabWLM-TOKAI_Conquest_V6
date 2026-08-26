# Iberian（イベリア攻勢） 1.2

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 表示名 | Iberian（イベリア攻勢） |
| 内部名 | `MP_Battery` |
| 版 | 1.2 |
| Portal用ファイル | `Lab_MP_Iberian_1.2.spatial.json` |
| Godot編集用ファイル | `Lab_MP_Iberian_1.2.tscn` |
| 拠点 | A～E（5拠点） |

静的検証では、占領エリア5件、出撃地点58件、弾薬箱5件、戦闘エリア1件を確認しています。Portal用 `.spatial.json` について、構文、参照関係、パス識別子の重複がないことも確認済みです。

## 実機検証状態（2.5.0）

Iberianは実機試験に合格しています（収録拠点はA～E）。

## 導入と互換性

`Lab_MP_Iberian_1.2.spatial.json` を対応するPortal MAPへアップロードし、2.4.0または2.5.0の同じ版の基幹TSとStrings JSONを続けてインポートしてください。`.tscn` はPortalへアップロードしません。異なるMAPの組や過去パッケージのファイルを混在させないでください。静的検証の合格は、実機試験の合格を意味しません。

## English summary

Iberian (Iberian Offensive) 1.2 uses internal root `MP_Battery` and objectives A–E. Its pair is `Lab_MP_Iberian_1.2.spatial.json` and `Lab_MP_Iberian_1.2.tscn`. Iberian passed runtime testing (the included objectives are A–E).

[マップ一覧](README.md) / [トップページ](../README-JP.md) / [Landing page](../README.md)

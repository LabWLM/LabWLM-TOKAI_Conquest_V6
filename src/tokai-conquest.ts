import * as modlib from "modlib";

const TOKAI_CONQUEST_BUILD_ID = "TOKAI CONQUEST 2.5.0 RELEASE";
const V12_TIMER_UI_ENABLED = true;
const V12_RANDOM_DAY_NIGHT_ENABLED = true;
const V12_PERCENTAGE_NIGHT_CHANCE = 15;

// Team IDs used by Portal. Change these only if your experience uses custom team routing.
const TEAM_1_ID = 1;
const TEAM_2_ID = 2;
const NEUTRAL_TEAM_ID = 0;

// Object ID layout used by the original visual script.
// Capture points are expected to start at 200: A=200, B=201, C=202, and so on.
const CAPTURE_POINT_BASE_ID = 200;
// Map authoring convention only: if a map uses objective-linked vehicle spawners, reserve
// A=600-609, B=610-619, C=620-629, and so on. This generic TS base does not control them.
// Default ticket count for normal Conquest.
const STARTING_TICKETS = 1500;
// Ticket counts used when conquestAssault is enabled.
const ASSAULT_ATTACKER_TICKETS = 2000;
const ASSAULT_DEFENDER_TICKETS = 1500;
// Andy V12 official Conquest ticker contract; target-zero runtime behavior remains TESTFIELD-gated.
const GAME_MODE_TARGET_SCORE = 0;
// Match length in seconds.
const TIME_LIMIT_SECONDS = 2700;
// Starts near-end music when either team reaches this ticket count.
const LOW_TICKET_MUSIC_THRESHOLD = 100;
// How often ticket bleed is applied, in seconds.
const TICKET_BLEED_INTERVAL_SECONDS = 2;
const TICKET_FLASH_INTERVAL_SECONDS = 0.25;
// Extra ticket loss when one team controls every objective.
const TOTAL_CONTROL_BONUS = 10;
// Capture and neutralization times for every objective, in seconds.
const FLAG_CAPTURE_TIME_SECONDS = 15;
const FLAG_NEUTRAL_TIME_SECONDS = 20;
// Scoreboard column index used for sorting. Column 1 is Score.
const SCOREBOARD_SORT_COLUMN = 1;
const CAPTUREPOINT_FLASH_GLOBAL_SLOT = 24;
const TICK_SOUND_LOSING_GLOBAL_SLOT = 20;
const CAPTURED_SOUND_GLOBAL_SLOT = 32;
const CAPTURED_VO_GLOBAL_SLOT = 33;
const CAPTURED_ENEMY_VO_GLOBAL_SLOT = 34;
const NEUTRALIZED_VO_GLOBAL_SLOT = 35;
const LOST_VO_GLOBAL_SLOT = 36;
const CAPTURING_VO_GLOBAL_SLOT = 39;
const TICK_SOUND_TAKING_GLOBAL_SLOT = 44;
const NEUTRALIZED_SOUND_GLOBAL_SLOT = 45;
const OOB_SOUND_GLOBAL_SLOT = 46;
const STATUS_VO_PRIMARY_GLOBAL_SLOT = 47;
const STATUS_VO_SECONDARY_GLOBAL_SLOT = 48;
const CAPTURE_TICK_SOUND_INTERVAL = 5;
const PLAYER_CAPTURE_HUD_INTERVAL_SECONDS = 0.25;
const AMMO_RESUPPLY_INTERACT_ID = 2000;
const AMMO_RESUPPLY_COOLDOWN_SECONDS = 60;
const AMMO_RESUPPLY_NOTICE_SECONDS = 2.5;
const AMMO_DIRECT_REFILL_AMOUNT = 999;
// Cross-map contract: up to six individually addressable ammo-station glow VFX objects.
const AMMO_RESUPPLY_VFX_IDS = [2300, 2301, 2302, 2303, 2304, 2305];
const AMMO_MAG_REFILL_SLOTS = [
    mod.InventorySlots.PrimaryWeapon,
    mod.InventorySlots.SecondaryWeapon,
    mod.InventorySlots.GadgetOne,
    mod.InventorySlots.GadgetTwo,
    mod.InventorySlots.Throwable,
];
const TEAM_SWITCH_INTERACT_POINTS = [998, 999];
const TEAM_2_OOB_TRIGGER_START = 1100;
const TEAM_2_OOB_TRIGGER_END = 1200;
const TEAM_1_OOB_TRIGGER_START = 1200;
const TEAM_1_OOB_TRIGGER_END = 1300;
const SHARED_OOB_TRIGGER_START = 1300;
const SHARED_OOB_TRIGGER_END = 1400;
const INVISIBLE_WALL_AREA_TRIGGER_ID = 1500;
const REPEL_INTERACT_START = 700;
const REPEL_INTERACT_END = 750;
const REPEL_TARGET_OFFSET = 50;
const REPEL_SPEED_DIVISOR = 8;
const OOB_COUNTDOWN_SECONDS = 10;
const KILL_SCORE = 100;
const ON_POINT_KILL_BONUS = 50;
const HEADSHOT_KILL_BONUS = 10;
const ASSIST_SCORE = 50;
const REVIVE_SCORE = 100;
const OBJECTIVE_SCORE = 200;

// HUD colors. The first vector is text/bar color, the second is the background color.
const TEAM_1_TEXT = () => mod.CreateVector(0, 0.8, 1);
const TEAM_1_BG = () => mod.CreateVector(0, 0.2, 0.5);
const TEAM_2_TEXT = () => mod.CreateVector(1, 0.2, 0.2);
const TEAM_2_BG = () => mod.CreateVector(0.6, 0.1, 0.1);
const WHITE = () => mod.CreateVector(1, 1, 1);
const BLACK = () => mod.CreateVector(0, 0, 0);


const enum PlayerVar {
    Score = 0,
    Kills = 1,
    Deaths = 2,
    Assists = 3,
    Captures = 4,
    Revives = 5,
    OnPoint = 6,
    CurrentCapturePointId = 7,
    LastCaptureProgress = 8,
    CaptureTick = 9,
    OutOfBounds = 10,
    IgnoreOOB = 11,
}

type PlayerState = {
    score: number;
    kills: number;
    deaths: number;
    assists: number;
    captures: number;
    revives: number;
    onPoint: boolean;
    currentCapturePointId: number;
    lastCaptureProgress: number;
    captureTick: number;
    outOfBounds: boolean;
    ignoreOOB: boolean;
    invisibleWallTriggered: boolean;
    undeployHandled: boolean;
};

type ConquestState = {
    initialized: boolean;
    gameOngoing: boolean;
    team1Score: number;
    team2Score: number;
    team1StartingScore: number;
    team2StartingScore: number;
    lastTicketBleedTick: number;
    lastHudTick: number;
    lowMusicTriggered: boolean;
    lowTimeVoTriggered: boolean;
    lowTicketVoTeam1Triggered: boolean;
    lowTicketVoTeam2Triggered: boolean;
    lastLeadVoTeamId: number;
    enableTeamSwitching: boolean;
    enableTimerUI: boolean;
    enableVO: boolean;
    enableOOB: boolean;
    enableVehicleSpawns: boolean;
    givePlayersNVG: boolean;
    givePlayersGasMask: boolean;
    randomDayNightEnabled: boolean;
    percentageNightChance: number;
    nightMode: boolean;
    conquestAssault: boolean;
    endGameStarted: boolean;
    lastBleedTeamId: number;
    lastBleedTime: number;
    lastHudFlashTick: number;
    lastCaptureFlashTick: number;
    captureFlashLoopRunning: boolean;
};


const state: ConquestState = {
    initialized: false,
    gameOngoing: false,
    team1Score: STARTING_TICKETS,
    team2Score: STARTING_TICKETS,
    team1StartingScore: STARTING_TICKETS,
    team2StartingScore: STARTING_TICKETS,
    lastTicketBleedTick: -1,
    lastHudTick: -1,
    lowMusicTriggered: false,
    lowTimeVoTriggered: false,
    lowTicketVoTeam1Triggered: false,
    lowTicketVoTeam2Triggered: false,
    lastLeadVoTeamId: NEUTRAL_TEAM_ID,
    enableTeamSwitching: true,
    enableTimerUI: V12_TIMER_UI_ENABLED,
    enableVO: true,
    enableOOB: true,
    enableVehicleSpawns: true,
    givePlayersNVG: false,
    givePlayersGasMask: false,
    randomDayNightEnabled: V12_RANDOM_DAY_NIGHT_ENABLED,
    percentageNightChance: V12_PERCENTAGE_NIGHT_CHANCE,
    nightMode: false,
    conquestAssault: false,
    endGameStarted: false,
    lastBleedTeamId: NEUTRAL_TEAM_ID,
    lastBleedTime: -1,
    lastHudFlashTick: -1,
    lastCaptureFlashTick: -1,
    captureFlashLoopRunning: false,
};


// Runtime player state for the current match. This replaces Portal variables for values that do not need persistence.
const playerStates = new Map<number, PlayerState>();
const captureAudioLoops = new Set<number>();
const oobCountdownLoops = new Set<number>();
const playersByCapturePoint = new Map<number, mod.Player[]>();
const ammoResupplyLastUsedByPlayerId = new Map<number, number>();
const ammoResupplyNoticeTokenByPlayerId = new Map<number, number>();
const spawnedCaptureSoundObjects: mod.Object[] = [];

// This module-scoped value intentionally survives per-round state resets while the script stays loaded.
let previousRoundWasNight = false;

type TeamAssignmentPhase = "awaiting-game-start" | "initial" | "late";

type ObservedPlayerJoin = {
    player: mod.Player;
    observedPhase: TeamAssignmentPhase;
    portalTeamId: number;
    targetRoundGeneration: number;
};

// Per-round team assignment state. Joins observed before OnGameModeStarted remain queued.
let teamAssignmentPhase: TeamAssignmentPhase = "awaiting-game-start";
let currentRoundGeneration = 0;
let initialTeam1Count = 0;
let initialTeam2Count = 0;
const observedPlayerJoins = new Map<number, ObservedPlayerJoin>();
const initialTeamAssignedPlayerIds = new Set<number>();
const initialAssignedTeamIdByPlayerId = new Map<number, number>();
const lateJoinAssignedPlayerIds = new Set<number>();
const completedPlayerJoinIds = new Set<number>();

function defaultPlayerState(): PlayerState {
    return {
        score: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        captures: 0,
        revives: 0,
        onPoint: false,
        currentCapturePointId: -1,
        lastCaptureProgress: 0,
        captureTick: 0,
        outOfBounds: false,
        ignoreOOB: false,
        invisibleWallTriggered: false,
        undeployHandled: true,
    };
}

function playerState(player: mod.Player): PlayerState {
    const id = mod.GetObjId(player);
    let current = playerStates.get(id);
    if (current === undefined) {
        current = defaultPlayerState();
        playerStates.set(id, current);
    }
    return current;
}

function team(id: number): mod.Team {
    return mod.GetTeam(id);
}

function teamId(teamValue: mod.Team): number {
    return mod.GetObjId(teamValue);
}

function otherTeamId(id: number): number {
    return id === TEAM_1_ID ? TEAM_2_ID : TEAM_1_ID;
}

function otherTeam(teamValue: mod.Team): mod.Team {
    return team(otherTeamId(teamId(teamValue)));
}

function playerAiState(player: mod.Player): boolean | undefined {
    if (!mod.IsPlayerValid(player)) return undefined;
    try {
        return mod.GetSoldierState(player, mod.SoldierStateBool.IsAISoldier);
    } catch (_error) {
        void _error;
        return undefined;
    }
}

function playerAliveState(player: mod.Player): boolean | undefined {
    if (!mod.IsPlayerValid(player)) return undefined;
    try {
        return mod.GetSoldierState(player, mod.SoldierStateBool.IsAlive);
    } catch (_error) {
        void _error;
        return undefined;
    }
}

function randomIndex(maxInclusive: number): number {
    const unitValue = mod.RandomReal(0, 1);
    return Math.min(maxInclusive, Math.floor(unitValue * (maxInclusive + 1)));
}

function applyAutomaticTeamAssignment(player: mod.Player, targetTeamId: number): boolean {
    if (!mod.IsPlayerValid(player)) return false;
    if (targetTeamId !== TEAM_1_ID && targetTeamId !== TEAM_2_ID) return false;
    try {
        const currentTeamId = teamId(mod.GetTeam(player));
        if (currentTeamId === targetTeamId) return true;
        const targetTeam = mod.GetTeam(targetTeamId);
        if (teamId(targetTeam) !== targetTeamId) return false;
        mod.SetTeam(player, targetTeam);
        return true;
    } catch (_error) {
        void _error;
        return false;
    }
}

function planInitialAssignment(player: mod.Player, targetTeamId: number): void {
    const playerId = mod.GetObjId(player);
    if (initialAssignedTeamIdByPlayerId.has(playerId)) return;
    initialAssignedTeamIdByPlayerId.set(playerId, targetTeamId);
    if (targetTeamId === TEAM_1_ID) initialTeam1Count += 1;
    if (targetTeamId === TEAM_2_ID) initialTeam2Count += 1;
}

function applyPlannedInitialAssignment(player: mod.Player): boolean {
    const playerId = mod.GetObjId(player);
    if (initialTeamAssignedPlayerIds.has(playerId)) return true;
    const targetTeamId = initialAssignedTeamIdByPlayerId.get(playerId);
    if (targetTeamId === undefined || !applyAutomaticTeamAssignment(player, targetTeamId)) return false;
    initialTeamAssignedPlayerIds.add(playerId);
    return true;
}

function balancedInitialTeamId(): number {
    if (initialTeam1Count < initialTeam2Count) return TEAM_1_ID;
    if (initialTeam2Count < initialTeam1Count) return TEAM_2_ID;
    return mod.RandomReal(0, 1) < 0.5 ? TEAM_1_ID : TEAM_2_ID;
}

function assignInitialPlayer(player: mod.Player): void {
    planInitialAssignment(player, balancedInitialTeamId());
    applyPlannedInitialAssignment(player);
}

type HumanTeamCounts = {
    team1: number;
    team2: number;
};

function currentHumanTeamCountsExcluding(excludedPlayerId: number): HumanTeamCounts | undefined {
    const allPlayers = mod.AllPlayers();
    const countedPlayerIds = new Set<number>();
    let team1 = 0;
    let team2 = 0;

    for (let i = 0; i < countPlayers(allPlayers); i += 1) {
        const player = playerValue(allPlayers, i);
        if (!mod.IsPlayerValid(player)) continue;
        const playerId = mod.GetObjId(player);
        if (playerId === excludedPlayerId || countedPlayerIds.has(playerId)) continue;
        countedPlayerIds.add(playerId);

        let currentTeamId: number;
        try {
            currentTeamId = teamId(mod.GetTeam(player));
        } catch (_error) {
            void _error;
            return undefined;
        }
        if (currentTeamId !== TEAM_1_ID && currentTeamId !== TEAM_2_ID) continue;

        const aiState = playerAiState(player);
        if (aiState === undefined) return undefined;
        if (aiState) continue;
        if (currentTeamId === TEAM_1_ID) team1 += 1;
        if (currentTeamId === TEAM_2_ID) team2 += 1;
    }

    return { team1, team2 };
}

function assignLateJoinPlayer(observed: ObservedPlayerJoin): boolean {
    const player = observed.player;
    const playerId = mod.GetObjId(player);
    if (lateJoinAssignedPlayerIds.has(playerId)) return true;
    if (!mod.IsPlayerValid(player)) return false;
    if (observed.portalTeamId !== TEAM_1_ID && observed.portalTeamId !== TEAM_2_ID) {
        const currentTeamId = teamId(mod.GetTeam(player));
        if (currentTeamId !== TEAM_1_ID && currentTeamId !== TEAM_2_ID) return false;
        observed.portalTeamId = currentTeamId;
    }
    const portalTeamId = observed.portalTeamId;
    if (portalTeamId !== TEAM_1_ID && portalTeamId !== TEAM_2_ID) return false;
    const currentCounts = currentHumanTeamCountsExcluding(playerId);
    if (currentCounts === undefined) return false;
    const difference = Math.abs(currentCounts.team1 - currentCounts.team2);
    const targetTeamId = difference >= 2
        ? currentCounts.team1 < currentCounts.team2 ? TEAM_1_ID : TEAM_2_ID
        : otherTeamId(portalTeamId);
    if (!applyAutomaticTeamAssignment(player, targetTeamId)) return false;
    lateJoinAssignedPlayerIds.add(playerId);
    return true;
}

function completePlayerJoin(player: mod.Player): void {
    const playerId = mod.GetObjId(player);
    if (completedPlayerJoinIds.has(playerId)) return;
    completedPlayerJoinIds.add(playerId);
    initializePlayerState(player);
    if (!isAiSoldier(player)) enableAmmoResupplyVFX();
    createPlayerHud(player);
    updatePlayerScoreboard(player);
    if (state.gameOngoing) updateAllHud();
}

function processObservedPlayerJoin(playerId: number): void {
    if (teamAssignmentPhase === "awaiting-game-start") return;
    const observed = observedPlayerJoins.get(playerId);
    if (observed === undefined || observed.targetRoundGeneration !== currentRoundGeneration || completedPlayerJoinIds.has(playerId)) return;
    const player = observed.player;
    const aiState = playerAiState(player);
    if (aiState === undefined) return;

    if (!aiState) {
        if (initialTeamAssignedPlayerIds.has(playerId)) {
            // The OnGameModeStarted scan assigned this player before its join pipeline ran.
        } else if (observed.observedPhase !== "late") {
            assignInitialPlayer(player);
        } else if (observed.observedPhase === "late") {
            if (!assignLateJoinPlayer(observed)) return;
        }
    }

    completePlayerJoin(player);
}

function processOneObservedPlayerJoin(): void {
    if (teamAssignmentPhase === "awaiting-game-start") return;
    for (const playerId of observedPlayerJoins.keys()) {
        if (completedPlayerJoinIds.has(playerId)) continue;
        processObservedPlayerJoin(playerId);
        if (!completedPlayerJoinIds.has(playerId)) {
            const observed = observedPlayerJoins.get(playerId);
            if (observed !== undefined) {
                observedPlayerJoins.delete(playerId);
                observedPlayerJoins.set(playerId, observed);
            }
        }
        return;
    }
}

function shuffleInitialHumanPlayers(allPlayers: PlayerCollection): void {
    const humanPlayers: mod.Player[] = [];
    const collectedPlayerIds = new Set<number>();

    for (let i = 0; i < countPlayers(allPlayers); i += 1) {
        const player = playerValue(allPlayers, i);
        if (playerAiState(player) !== false) continue;
        const playerId = mod.GetObjId(player);
        if (collectedPlayerIds.has(playerId)) continue;
        collectedPlayerIds.add(playerId);
        humanPlayers.push(player);
    }

    for (let i = humanPlayers.length - 1; i > 0; i -= 1) {
        const swapIndex = randomIndex(i);
        const current = humanPlayers[i];
        humanPlayers[i] = humanPlayers[swapIndex];
        humanPlayers[swapIndex] = current;
    }

    const firstTeamId = mod.RandomReal(0, 1) < 0.5 ? TEAM_1_ID : TEAM_2_ID;
    for (let i = 0; i < humanPlayers.length; i += 1) {
        planInitialAssignment(humanPlayers[i], i % 2 === 0 ? firstTeamId : otherTeamId(firstTeamId));
    }
}

function beginRoundTeamAssignment(): void {
    currentRoundGeneration += 1;
    initialTeamAssignedPlayerIds.clear();
    initialAssignedTeamIdByPlayerId.clear();
    lateJoinAssignedPlayerIds.clear();
    completedPlayerJoinIds.clear();
    initialTeam1Count = 0;
    initialTeam2Count = 0;
    teamAssignmentPhase = "initial";
    const allPlayers = mod.AllPlayers();
    const currentObservedJoins = new Map<number, ObservedPlayerJoin>();
    for (const [playerId, observed] of observedPlayerJoins) {
        if (observed.targetRoundGeneration < currentRoundGeneration) continue;
        if (observed.targetRoundGeneration > currentRoundGeneration) {
            currentObservedJoins.set(playerId, observed);
            continue;
        }
        if (!mod.IsPlayerValid(observed.player)) continue;
        currentObservedJoins.set(playerId, {
            player: observed.player,
            observedPhase: "awaiting-game-start",
            portalTeamId: observed.portalTeamId,
            targetRoundGeneration: currentRoundGeneration,
        });
    }

    for (let i = 0; i < countPlayers(allPlayers); i += 1) {
        const player = playerValue(allPlayers, i);
        if (!mod.IsPlayerValid(player)) continue;
        const playerId = mod.GetObjId(player);
        currentObservedJoins.set(playerId, {
            player,
            observedPhase: "awaiting-game-start",
            portalTeamId: teamId(mod.GetTeam(player)),
            targetRoundGeneration: currentRoundGeneration,
        });
    }
    observedPlayerJoins.clear();
    for (const [playerId, observed] of currentObservedJoins) observedPlayerJoins.set(playerId, observed);

    shuffleInitialHumanPlayers(allPlayers);
}

function handleTeamAssignmentOnHumanDeploy(player: mod.Player): void {
    if (teamAssignmentPhase === "awaiting-game-start") return;
    if (playerAiState(player) !== false) return;
    const playerId = mod.GetObjId(player);
    if (teamAssignmentPhase === "initial") {
        if (!initialTeamAssignedPlayerIds.has(playerId)) assignInitialPlayer(player);
        if (!initialTeamAssignedPlayerIds.has(playerId)) return;
        teamAssignmentPhase = "late";
        completePlayerJoin(player);
        return;
    }

    if (completedPlayerJoinIds.has(playerId)) return;
    const observed = observedPlayerJoins.get(playerId);
    if (observed === undefined) return;
    if (observed.targetRoundGeneration !== currentRoundGeneration) return;
    if (observed.observedPhase !== "late") {
        assignInitialPlayer(player);
        if (initialTeamAssignedPlayerIds.has(playerId)) completePlayerJoin(player);
        return;
    }
    if (assignLateJoinPlayer(observed)) completePlayerJoin(player);
}

function capturepointFlashGlobalVar(): mod.Variable {
    return mod.GlobalVariable(CAPTUREPOINT_FLASH_GLOBAL_SLOT);
}

function tickSoundLosingGlobalVar(): mod.Variable {
    return mod.GlobalVariable(TICK_SOUND_LOSING_GLOBAL_SLOT);
}

function capturedSoundGlobalVar(): mod.Variable {
    return mod.GlobalVariable(CAPTURED_SOUND_GLOBAL_SLOT);
}

function capturedVoGlobalVar(): mod.Variable {
    return mod.GlobalVariable(CAPTURED_VO_GLOBAL_SLOT);
}

function capturedEnemyVoGlobalVar(): mod.Variable {
    return mod.GlobalVariable(CAPTURED_ENEMY_VO_GLOBAL_SLOT);
}

function neutralizedVoGlobalVar(): mod.Variable {
    return mod.GlobalVariable(NEUTRALIZED_VO_GLOBAL_SLOT);
}

function lostVoGlobalVar(): mod.Variable {
    return mod.GlobalVariable(LOST_VO_GLOBAL_SLOT);
}

function capturingVoGlobalVar(): mod.Variable {
    return mod.GlobalVariable(CAPTURING_VO_GLOBAL_SLOT);
}

function tickSoundTakingGlobalVar(): mod.Variable {
    return mod.GlobalVariable(TICK_SOUND_TAKING_GLOBAL_SLOT);
}

function neutralizedSoundGlobalVar(): mod.Variable {
    return mod.GlobalVariable(NEUTRALIZED_SOUND_GLOBAL_SLOT);
}

function oobSoundGlobalVar(): mod.Variable {
    return mod.GlobalVariable(OOB_SOUND_GLOBAL_SLOT);
}

function statusVoPrimaryGlobalVar(): mod.Variable {
    return mod.GlobalVariable(STATUS_VO_PRIMARY_GLOBAL_SLOT);
}

function statusVoSecondaryGlobalVar(): mod.Variable {
    return mod.GlobalVariable(STATUS_VO_SECONDARY_GLOBAL_SLOT);
}

function getTeamScore(teamValue: mod.Team): number {
    return teamId(teamValue) === TEAM_1_ID ? state.team1Score : state.team2Score;
}

function setTeamScore(teamValue: mod.Team, score: number): void {
    const previous = getTeamScore(teamValue);
    const clamped = Math.max(0, Math.floor(score));
    if (teamId(teamValue) === TEAM_1_ID) {
        state.team1Score = clamped;
    } else {
        state.team2Score = clamped;
    }
    if (clamped < previous) {
        state.lastBleedTeamId = teamId(teamValue);
        state.lastBleedTime = mod.GetMatchTimeElapsed();
    }
    if (clamped > 0) mod.SetGameModeScore(teamValue, clamped);
}

function addTeamScore(teamValue: mod.Team, delta: number): void {
    setTeamScore(teamValue, getTeamScore(teamValue) + delta);
}

function getStartingScore(teamValue: mod.Team): number {
    return teamId(teamValue) === TEAM_1_ID ? state.team1StartingScore : state.team2StartingScore;
}

function leadingTeamId(): number {
    const team1Score = getTeamScore(team(TEAM_1_ID));
    const team2Score = getTeamScore(team(TEAM_2_ID));
    if (team1Score === team2Score) return NEUTRAL_TEAM_ID;
    return team1Score > team2Score ? TEAM_1_ID : TEAM_2_ID;
}

function canSwitchPlayerToTeam(player: mod.Player, targetTeamId: number): boolean {
    const currentTeamId = teamId(mod.GetTeam(player));
    const leadTeamId = leadingTeamId();
    if (leadTeamId === NEUTRAL_TEAM_ID) return false;
    return currentTeamId === leadTeamId && targetTeamId === otherTeamId(leadTeamId);
}

function widgetName(parts: Array<string | number | mod.Player | mod.Team | mod.CapturePoint>): string {
    return parts.map((part) => (typeof part === "string" || typeof part === "number" ? part : String(mod.GetObjId(part)))).join("_");
}

function find(name: string, root?: mod.UIWidget): mod.UIWidget {
    return root === undefined ? mod.FindUIWidgetWithName(name) : mod.FindUIWidgetWithName(name, root);
}

function message(
    value: string | number,
    arg0?: string | number | mod.Player,
    arg1?: string | number | mod.Player,
    arg2?: string | number | mod.Player,
): mod.Message {
    if (arg2 !== undefined && arg0 !== undefined && arg1 !== undefined) return mod.Message(value, arg0, arg1, arg2);
    if (arg1 !== undefined && arg0 !== undefined) return mod.Message(value, arg0, arg1);
    if (arg0 !== undefined) return mod.Message(value, arg0);
    return mod.Message(value);
}

function addText(
    name: string,
    position: mod.Vector,
    size: mod.Vector,
    parent: mod.UIWidget,
    msg: mod.Message,
    textSize: number,
    textColor: mod.Vector,
    bgColor: mod.Vector,
    bgAlpha: number,
    bgFill: mod.UIBgFill,
    receiver?: mod.Player | mod.Team,
): void {
    if (receiver === undefined) {
        mod.AddUIText(
            name,
            position,
            size,
            mod.UIAnchor.TopCenter,
            parent,
            true,
            0,
            bgColor,
            bgAlpha,
            bgFill,
            msg,
            textSize,
            textColor,
            1,
            mod.UIAnchor.Center,
        );
        return;
    }

    mod.AddUIText(
        name,
        position,
        size,
        mod.UIAnchor.TopCenter,
        parent,
        true,
        0,
        bgColor,
        bgAlpha,
        bgFill,
        msg,
        textSize,
        textColor,
        1,
        mod.UIAnchor.Center,
        receiver,
    );
}

function countPortalArray(array: mod.Array): number {
    return modlib.ConvertArray(array).length;
}

function portalArrayValue<T>(array: mod.Array, index: number): T {
    return modlib.ConvertArray(array)[index] as T;
}

// Counts objectives owned by a team. Ticket bleed is based on this value.
function countOwnedCapturePoints(owner: mod.Team): number {
    const points = mod.AllCapturePoints();
    let owned = 0;

    for (let i = 0; i < countPortalArray(points); i += 1) {
        const point = portalArrayValue<mod.CapturePoint>(points, i);
        if (mod.Equals(mod.GetCurrentOwnerTeam(point), owner)) owned += 1;
    }

    return owned;
}

type PlayerCollection = mod.Array | mod.Player[];

function countPlayers(players: PlayerCollection): number {
    return Array.isArray(players) ? players.length : countPortalArray(players);
}

function playerValue(players: PlayerCollection, index: number): mod.Player {
    return Array.isArray(players) ? players[index] : portalArrayValue<mod.Player>(players, index);
}

function isAiSoldier(player: mod.Player): boolean {
    if (!mod.IsPlayerValid(player)) return false;
    try {
        return mod.GetSoldierState(player, mod.SoldierStateBool.IsAISoldier);
    } catch (_error) {
        void _error;
        return false;
    }
}

function trackPlayerOnPoint(player: mod.Player, point: mod.CapturePoint): void {
    const pointId = mod.GetObjId(point);
    const playerId = mod.GetObjId(player);
    const players = playersByCapturePoint.get(pointId) ?? [];
    if (!players.some((current) => mod.GetObjId(current) === playerId)) players.push(player);
    playersByCapturePoint.set(pointId, players);
}

function untrackPlayerFromPoint(player: mod.Player, pointId: number): void {
    const players = playersByCapturePoint.get(pointId);
    if (players === undefined) return;
    const playerId = mod.GetObjId(player);
    const remaining = players.filter((current) => mod.GetObjId(current) !== playerId);
    if (remaining.length > 0) {
        playersByCapturePoint.set(pointId, remaining);
    } else {
        playersByCapturePoint.delete(pointId);
    }
}

function untrackPlayerFromCurrentPoint(player: mod.Player): void {
    const current = playerState(player);
    if (current.currentCapturePointId >= 0) untrackPlayerFromPoint(player, current.currentCapturePointId);
}

function playerCanReceiveCaptureAudio(player: mod.Player): boolean {
    return mod.IsPlayerValid(player) && mod.GetSoldierState(player, mod.SoldierStateBool.IsAlive);
}

function flagIndex(point: mod.CapturePoint): number {
    return mod.GetObjId(point) - CAPTURE_POINT_BASE_ID;
}

function playerScore(player: mod.Player, slot: PlayerVar): number {
    const current = playerState(player);
    switch (slot) {
        case PlayerVar.Kills:
            return current.kills;
        case PlayerVar.Deaths:
            return current.deaths;
        case PlayerVar.Assists:
            return current.assists;
        case PlayerVar.Captures:
            return current.captures;
        case PlayerVar.Revives:
            return current.revives;
        default:
            return current.score;
    }
}

function addPlayerSlot(player: mod.Player, slot: PlayerVar): void {
    const current = playerState(player);
    switch (slot) {
        case PlayerVar.Kills:
            current.kills += 1;
            break;
        case PlayerVar.Deaths:
            current.deaths += 1;
            break;
        case PlayerVar.Assists:
            current.assists += 1;
            break;
        case PlayerVar.Captures:
            current.captures += 1;
            break;
        case PlayerVar.Revives:
            current.revives += 1;
            break;
        default:
            break;
    }
}

function addPlayerScore(player: mod.Player, scoreDelta: number, slot?: PlayerVar): void {
    const current = playerState(player);
    current.score += scoreDelta;
    if (slot !== undefined) addPlayerSlot(player, slot);
    updatePlayerScoreboard(player);
}

function initializePlayerState(player: mod.Player): void {
    const current = playerState(player);
    current.onPoint = false;
    current.currentCapturePointId = -1;
    current.lastCaptureProgress = 0;
    current.captureTick = 0;
    current.outOfBounds = false;
    current.ignoreOOB = false;
    current.invisibleWallTriggered = false;
    current.undeployHandled = true;
}

function setupScoreboard(): void {
    mod.SetScoreboardType(mod.ScoreboardType.CustomTwoTeams);
    mod.SetScoreboardColumnNames(
        message("Score"),
        message("Kills"),
        message("Deaths"),
        message("Assists"),
        message("Captures"),
    );
    mod.SetScoreboardColumnWidths(2, 1, 1, 1, 1);
    mod.SetScoreboardSorting(SCOREBOARD_SORT_COLUMN, true);
    updateScoreboardHeader();
}

function updateScoreboardHeader(): void {
    mod.SetScoreboardHeader(message("{}: {}", "NATO", getTeamScore(team(TEAM_1_ID))), message("{}: {}", "PaxArmata", getTeamScore(team(TEAM_2_ID))));
}

function updatePlayerScoreboard(player: mod.Player): void {
    mod.SetScoreboardPlayerValues(
        player,
        playerScore(player, PlayerVar.Score),
        playerScore(player, PlayerVar.Kills),
        playerScore(player, PlayerVar.Deaths),
        playerScore(player, PlayerVar.Assists),
        playerScore(player, PlayerVar.Captures),
    );
}

function setPlayerBuildVersionVisible(player: mod.Player): void {
    const name = playerHudWidget(player, "BuildVersion");
    if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), true);
}

function scoreRootName(teamValue: mod.Team): string {
    return widgetName(["ConquestHUD", teamValue, "Root"]);
}

function sharedHudRootName(): string {
    return "ConquestHUD_Shared_Root";
}

function createSharedHud(): void {
    const rootName = sharedHudRootName();
    if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));

    mod.AddUIContainer(rootName, mod.CreateVector(0, 0, 0), mod.CreateVector(2000, 2000, 0), mod.UIAnchor.TopCenter);
    const root = find(rootName);
    mod.SetUIWidgetBgFill(root, mod.UIBgFill.None);
    mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);
    addText("ConquestTimer", mod.CreateVector(0, 40, 0), mod.CreateVector(85, 30, 0), root, timeMessage(), 18, WHITE(), BLACK(), 0.8, mod.UIBgFill.None);
    if (!state.enableTimerUI && mod.HasUIWidgetWithName("ConquestTimer")) {
        mod.SetUIWidgetVisible(find("ConquestTimer", root), false);
    }
    updateSharedHud();
}

// Creates the team-restricted ticket HUD. Native objective UI is enabled separately.
function createTeamHud(teamValue: mod.Team): void {
    const rootName = scoreRootName(teamValue);
    if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));

    mod.AddUIContainer(rootName, mod.CreateVector(0, 0, 0), mod.CreateVector(2000, 2000, 0), mod.UIAnchor.TopCenter, teamValue);
    const root = find(rootName);
    mod.SetUIWidgetBgFill(root, mod.UIBgFill.None);
    mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);

    updateTeamHud(teamValue);
}

// Updates one team's view of scores, ticket bars, timer, and objective icons.
function updateTeamHud(teamValue: mod.Team): void {
    const friendly = getTeamScore(teamValue);
    const enemy = getTeamScore(otherTeam(teamValue));
    const friendlyStart = getStartingScore(teamValue);
    const enemyStart = getStartingScore(otherTeam(teamValue));
    const friendlyWidth = ticketBarWidth(friendly, friendlyStart);
    const enemyWidth = ticketBarWidth(enemy, enemyStart);

    setTextIfPresent(widgetName(["ConquestScore", teamValue, "Friendly"]), message("{}", friendly));
    setTextIfPresent(widgetName(["ConquestScore", teamValue, "Enemy"]), message("{}", enemy));
    setWidgetAlphaIfPresent(widgetName(["ConquestScore", teamValue, "Friendly"]), ticketFlashAlpha(teamValue));
    setWidgetAlphaIfPresent(widgetName(["ConquestScore", teamValue, "Enemy"]), ticketFlashAlpha(otherTeam(teamValue)));
    setSizeAndPositionIfPresent(widgetName(["ConquestBar", teamValue, "Friendly"]), mod.CreateVector(friendlyWidth, 10, 0), mod.CreateVector(-260 + friendlyWidth / 2, 60, 0));
    setSizeAndPositionIfPresent(widgetName(["ConquestBar", teamValue, "Enemy"]), mod.CreateVector(enemyWidth, 10, 0), mod.CreateVector(260 - enemyWidth / 2, 60, 0));
}

function ticketFlashAlpha(scoreTeam: mod.Team): number {
    if (getTeamScore(scoreTeam) <= LOW_TICKET_MUSIC_THRESHOLD) return Math.max(0.2, captureFlashAlpha());
    if (state.lastBleedTime < 0 || state.lastBleedTeamId !== teamId(scoreTeam)) return 0.8;
    return Math.max(0.8, 1 - (mod.GetMatchTimeElapsed() - state.lastBleedTime) / 1.75);
}

function updateSharedHud(): void {
    updateTimerHud();
}

function updateTimerHud(): void {
    setTextIfPresent("ConquestTimer", timeMessage(), find(sharedHudRootName()));
}

function captureFlashAlpha(): number {
    const value = mod.GetVariable(capturepointFlashGlobalVar());
    return typeof value === "number" ? value : 1;
}

function setTextIfPresent(name: string, msg: mod.Message, root?: mod.UIWidget): void {
    if (root === undefined ? mod.HasUIWidgetWithName(name) : mod.HasUIWidgetWithName(name, root)) {
        mod.SetUITextLabel(find(name, root), msg);
    }
}

function setWidgetAlphaIfPresent(name: string, alpha: number): void {
    if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetBgAlpha(find(name), alpha);
}

function setSizeAndPositionIfPresent(name: string, size: mod.Vector, position: mod.Vector): void {
    if (!mod.HasUIWidgetWithName(name)) return;
    const widget = find(name);
    mod.SetUIWidgetSize(widget, size);
    mod.SetUIWidgetPosition(widget, position);
}

function ticketBarWidth(score: number, startingScore: number): number {
    if (startingScore <= 0) return 0;
    return Math.max(0, Math.min(200, Math.floor(200 * (score / startingScore))));
}

function timeMessage(): mod.Message {
    const remaining = Math.max(0, Math.floor(mod.GetMatchTimeRemaining()));
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    const tens = Math.floor(seconds / 10);
    const ones = seconds % 10;
    return message("{} : {}{}", minutes, tens, ones);
}

function updateAllHud(): void {
    updateScoreboardHeader();
    updateSharedHud();
    updateTeamHud(team(TEAM_1_ID));
    updateTeamHud(team(TEAM_2_ID));
}

function updateTicketFlashHud(): void {
    const team1 = team(TEAM_1_ID);
    const team2 = team(TEAM_2_ID);
    setWidgetAlphaIfPresent(widgetName(["ConquestScore", team1, "Friendly"]), ticketFlashAlpha(team1));
    setWidgetAlphaIfPresent(widgetName(["ConquestScore", team1, "Enemy"]), ticketFlashAlpha(team2));
    setWidgetAlphaIfPresent(widgetName(["ConquestScore", team2, "Friendly"]), ticketFlashAlpha(team2));
    setWidgetAlphaIfPresent(widgetName(["ConquestScore", team2, "Enemy"]), ticketFlashAlpha(team1));
}

// Applies capture timing and enables each objective for the game mode.
function setupCapturePoint(point: mod.CapturePoint): void {
    mod.SetCapturePointCapturingTime(point, FLAG_CAPTURE_TIME_SECONDS);
    mod.SetCapturePointNeutralizationTime(point, FLAG_NEUTRAL_TIME_SECONDS);
    mod.SetMaxCaptureMultiplier(point, 3);
    mod.EnableGameModeObjective(point, true);
    mod.EnableCapturePointDeploying(point, true);
}

function setupAllCapturePoints(): void {
    const points = mod.AllCapturePoints();
    for (let i = 0; i < countPortalArray(points); i += 1) setupCapturePoint(portalArrayValue<mod.CapturePoint>(points, i));
}

function setupCaptureSounds(): void {
    cleanupCaptureSounds();
    mod.SetVariable(capturedVoGlobalVar(), spawnVOObject());
    mod.SetVariable(capturedEnemyVoGlobalVar(), spawnVOObject());
    mod.SetVariable(neutralizedVoGlobalVar(), spawnVOObject());
    mod.SetVariable(lostVoGlobalVar(), spawnVOObject());
    mod.SetVariable(capturingVoGlobalVar(), spawnVOObject());
    mod.SetVariable(statusVoPrimaryGlobalVar(), spawnVOObject());
    mod.SetVariable(statusVoSecondaryGlobalVar(), spawnVOObject());
    mod.SetVariable(
        tickSoundTakingGlobalVar(),
        spawnSoundObject(mod.RuntimeSpawn_Common.SFX_UI_Gamemode_Shared_CaptureObjectives_CapturingTickIcon_IsFriendly_OneShot2D),
    );
    mod.SetVariable(
        tickSoundLosingGlobalVar(),
        spawnSoundObject(mod.RuntimeSpawn_Common.SFX_UI_Gamemode_Shared_CaptureObjectives_CapturingTickEnemy_OneShot2D),
    );
    mod.SetVariable(
        capturedSoundGlobalVar(),
        spawnSoundObject(mod.RuntimeSpawn_Common.SFX_UI_Gamemode_Shared_CaptureObjectives_OnCapturedByFriendly_OneShot2D),
    );
    mod.SetVariable(neutralizedSoundGlobalVar(), spawnSoundObject(mod.RuntimeSpawn_Common.SFX_UI_Gauntlet_Circuit_TerminalFriendlyCapturing_OneShot2D));
    mod.SetVariable(oobSoundGlobalVar(), spawnSoundObject(mod.RuntimeSpawn_Common.SFX_UI_Gamemode_Shared_OutOfBounds_Countdown_OneShot2D));
    mod.SetVariable(capturepointFlashGlobalVar(), 1);
}

function spawnVOObject(): mod.VO {
    return spawnSoundObject(mod.RuntimeSpawn_Common.SFX_VOModule_OneShot2D) as unknown as mod.VO;
}

function spawnSoundObject(soundSpawn: mod.Any): mod.Object {
    const soundObject = mod.SpawnObject(
        soundSpawn ?? mod.RuntimeSpawn_Common.SFX_VOModule_OneShot2D,
        mod.CreateVector(0, 0, 0),
        mod.CreateVector(0, 0, 0),
        mod.CreateVector(0, 0, 0),
    );
    spawnedCaptureSoundObjects.push(soundObject);
    return soundObject;
}

function getAmmoResupplyVFXIfPresent(vfxId: number): mod.VFX | undefined {
    try {
        const vfx = mod.GetVFX(vfxId);
        return vfx === undefined ? undefined : vfx;
    } catch (_error) {
        void _error;
        return undefined;
    }
}

function enableAmmoResupplyVFX(): void {
    for (const vfxId of AMMO_RESUPPLY_VFX_IDS) {
        const vfx = getAmmoResupplyVFXIfPresent(vfxId);
        if (vfx === undefined) continue;
        mod.EnableVFX(vfx, true);
    }
}

function cleanupCaptureSounds(): void {
    for (const soundObject of spawnedCaptureSoundObjects) {
        mod.UnspawnObject(soundObject);
    }
    spawnedCaptureSoundObjects.length = 0;
}

// Resets all match-scoped state. Customizers can change feature flags here.
function initializeConquestState(): void {
    cleanupCaptureSounds();
    playerStates.clear();
    captureAudioLoops.clear();
    oobCountdownLoops.clear();
    playersByCapturePoint.clear();
    ammoResupplyLastUsedByPlayerId.clear();
    ammoResupplyNoticeTokenByPlayerId.clear();
    state.initialized = true;
    state.gameOngoing = false;
    state.enableTeamSwitching = true;
    state.enableTimerUI = V12_TIMER_UI_ENABLED;
    state.enableVO = true;
    state.enableOOB = true;
    state.enableVehicleSpawns = true;
    state.givePlayersNVG = false;
    state.givePlayersGasMask = false;
    state.randomDayNightEnabled = V12_RANDOM_DAY_NIGHT_ENABLED;
    state.percentageNightChance = V12_PERCENTAGE_NIGHT_CHANCE;
    state.nightMode = false;
    state.conquestAssault = false;
    state.lastTicketBleedTick = -1;
    state.lastHudTick = -1;
    state.lowMusicTriggered = false;
    state.lowTimeVoTriggered = false;
    state.lowTicketVoTeam1Triggered = false;
    state.lowTicketVoTeam2Triggered = false;
    state.lastLeadVoTeamId = NEUTRAL_TEAM_ID;
    state.endGameStarted = false;
    state.lastBleedTeamId = NEUTRAL_TEAM_ID;
    state.lastBleedTime = -1;
    state.lastHudFlashTick = -1;
    state.lastCaptureFlashTick = -1;
    state.captureFlashLoopRunning = false;

    if (state.conquestAssault) {
        state.team1StartingScore = ASSAULT_ATTACKER_TICKETS;
        state.team2StartingScore = ASSAULT_DEFENDER_TICKETS;
    } else {
        state.team1StartingScore = STARTING_TICKETS;
        state.team2StartingScore = STARTING_TICKETS;
    }

    state.team1Score = getStartingScore(team(TEAM_1_ID));
    state.team2Score = getStartingScore(team(TEAM_2_ID));
}

function decideRandomNightMode(): void {
    state.nightMode = false;
    if (state.randomDayNightEnabled && !previousRoundWasNight) {
        state.nightMode = mod.RandomReal(0, 100) < state.percentageNightChance;
    }
    previousRoundWasNight = state.nightMode;
    if (state.nightMode) state.givePlayersNVG = true;
}

function setupConquestFoundation(): void {
    const team1 = team(TEAM_1_ID);
    const team2 = team(TEAM_2_ID);
    mod.SetGameModeTimeLimit(TIME_LIMIT_SECONDS);
    mod.SetHUDTicker(mod.GameModeTicker.Ticker_Conquest);
    mod.SetGameModeCriteria(mod.ScoreCriteria.HighestProgress);
    mod.SetGameModeInitialScore(team1, getStartingScore(team1));
    mod.SetGameModeInitialScore(team2, getStartingScore(team2));
    mod.SetGameModeTargetScore(GAME_MODE_TARGET_SCORE);
    mod.SetAllObjectivesUIEnabled(true);
    mod.SetVehicleCategoryAllowedInSurroundingArea(mod.VehicleCategories.Air_All, true);
    setupScoreboard();
    setupAllCapturePoints();
    createSharedHud();
    createTeamHud(team(TEAM_1_ID));
    createTeamHud(team(TEAM_2_ID));
    enableAmmoResupplyVFX();
}

function startConquestGameplay(): void {
    if (state.gameOngoing) return;
    mod.LoadMusic(mod.MusicPackages.Core);
    mod.PlayMusic(mod.MusicEvents.Core_LastPhaseBegin);
    state.gameOngoing = true;
    setupCaptureSounds();
    startCaptureFlashLoop();
}

function startConquest(): void {
    setupConquestFoundation();
    startConquestGameplay();
}

// Applies the ticket bleed rules:
// - a full-control bonus when one team owns every objective
// - a loser-only bleed based on the objective ownership difference
function bleedTickets(): void {
    const team1Owned = countOwnedCapturePoints(team(TEAM_1_ID));
    const team2Owned = countOwnedCapturePoints(team(TEAM_2_ID));

    if (team1Owned > 0 && team2Owned === 0) addTeamScore(team(TEAM_2_ID), -TOTAL_CONTROL_BONUS);
    if (team2Owned > 0 && team1Owned === 0) addTeamScore(team(TEAM_1_ID), -TOTAL_CONTROL_BONUS);

    if (team1Owned > team2Owned) {
        addTeamScore(team(TEAM_2_ID), -(team1Owned - team2Owned));
    } else if (team2Owned > team1Owned) {
        addTeamScore(team(TEAM_1_ID), -(team2Owned - team1Owned));
    }
}

// Runs ticket bleed at a fixed interval without relying on async waits.
function maybeBleedTickets(): void {
    if (!state.gameOngoing) return;

    const elapsed = Math.floor(mod.GetMatchTimeElapsed());
    const currentTick = Math.floor(elapsed / TICKET_BLEED_INTERVAL_SECONDS);
    if (currentTick === state.lastTicketBleedTick) return;

    state.lastTicketBleedTick = currentTick;
    bleedTickets();
    maybeTriggerLowTicketMusic();
    updateAllHud();
    checkEndGame();
}

// Refreshes the HUD once per elapsed second.
function maybeRefreshHud(): void {
    if (!state.gameOngoing) return;

    const elapsed = Math.floor(mod.GetMatchTimeElapsed());
    if (elapsed !== state.lastHudTick) {
        state.lastHudTick = elapsed;
        updateAllHud();
        return;
    }

    if (!ticketFlashActive()) return;
    const flashTick = Math.floor(mod.GetMatchTimeElapsed() / TICKET_FLASH_INTERVAL_SECONDS);
    if (flashTick === state.lastHudFlashTick) return;
    state.lastHudFlashTick = flashTick;
    updateTicketFlashHud();
}

function startCaptureFlashLoop(): void {
    if (state.captureFlashLoopRunning) return;
    state.captureFlashLoopRunning = true;
    void runCaptureFlashLoop();
}

async function runCaptureFlashLoop(): Promise<void> {
    let flashStep = 0;
    while (state.gameOngoing) {
        mod.SetVariable(capturepointFlashGlobalVar(), flashStep / 10);
        flashStep = flashStep >= 8 ? 0 : flashStep + 2;
        await mod.Wait(0.1);
    }
    state.captureFlashLoopRunning = false;
}

function ticketFlashActive(): boolean {
    return (
        (state.lastBleedTime >= 0 && mod.GetMatchTimeElapsed() - state.lastBleedTime < 1.75) ||
        getTeamScore(team(TEAM_1_ID)) <= LOW_TICKET_MUSIC_THRESHOLD ||
        getTeamScore(team(TEAM_2_ID)) <= LOW_TICKET_MUSIC_THRESHOLD
    );
}

// Triggers the low-ticket music only once per match.
function maybeTriggerLowTicketMusic(): void {
    if (state.lowMusicTriggered) return;
    if (getTeamScore(team(TEAM_1_ID)) > LOW_TICKET_MUSIC_THRESHOLD && getTeamScore(team(TEAM_2_ID)) > LOW_TICKET_MUSIC_THRESHOLD) return;

    state.lowMusicTriggered = true;
    mod.PlayMusic(mod.MusicEvents.Core_Overtime_Loop);
}

function maybePlayStatusVO(): void {
    if (!state.gameOngoing || !state.enableVO) return;

    if (!state.lowTimeVoTriggered && mod.GetMatchTimeRemaining() <= 300) {
        state.lowTimeVoTriggered = true;
        mod.PlayVO(mod.GetVariable(statusVoPrimaryGlobalVar()), mod.VoiceOverEvents2D.TimeLow, mod.VoiceOverFlags.Alpha, team(TEAM_1_ID));
        mod.PlayVO(mod.GetVariable(statusVoSecondaryGlobalVar()), mod.VoiceOverEvents2D.TimeLow, mod.VoiceOverFlags.Alpha, team(TEAM_2_ID));
    }

    const team1Score = getTeamScore(team(TEAM_1_ID));
    const team2Score = getTeamScore(team(TEAM_2_ID));
    const leadTeamId = team1Score > team2Score ? TEAM_1_ID : team2Score > team1Score ? TEAM_2_ID : NEUTRAL_TEAM_ID;
    if (leadTeamId !== NEUTRAL_TEAM_ID && leadTeamId !== state.lastLeadVoTeamId) {
        state.lastLeadVoTeamId = leadTeamId;
        const leadTeam = team(leadTeamId);
        const losingTeam = otherTeam(leadTeam);
        mod.PlayVO(mod.GetVariable(statusVoPrimaryGlobalVar()), mod.VoiceOverEvents2D.ProgressMidWinning, mod.VoiceOverFlags.Alpha, leadTeam);
        mod.PlayVO(mod.GetVariable(statusVoSecondaryGlobalVar()), mod.VoiceOverEvents2D.ProgressMidLosing, mod.VoiceOverFlags.Alpha, losingTeam);
    }

    if (!state.lowTicketVoTeam1Triggered && team1Score <= LOW_TICKET_MUSIC_THRESHOLD) {
        state.lowTicketVoTeam1Triggered = true;
        mod.PlayVO(mod.GetVariable(statusVoPrimaryGlobalVar()), mod.VoiceOverEvents2D.PlayerCountFriendlyLow, mod.VoiceOverFlags.Alpha, team(TEAM_1_ID));
        mod.PlayVO(mod.GetVariable(statusVoSecondaryGlobalVar()), mod.VoiceOverEvents2D.PlayerCountEnemyLow, mod.VoiceOverFlags.Alpha, team(TEAM_2_ID));
    }

    if (!state.lowTicketVoTeam2Triggered && team2Score <= LOW_TICKET_MUSIC_THRESHOLD) {
        state.lowTicketVoTeam2Triggered = true;
        mod.PlayVO(mod.GetVariable(statusVoPrimaryGlobalVar()), mod.VoiceOverEvents2D.PlayerCountFriendlyLow, mod.VoiceOverFlags.Alpha, team(TEAM_2_ID));
        mod.PlayVO(mod.GetVariable(statusVoSecondaryGlobalVar()), mod.VoiceOverEvents2D.PlayerCountEnemyLow, mod.VoiceOverFlags.Alpha, team(TEAM_1_ID));
    }
}

// Ends the match when time runs out or either team's tickets reach zero.
function checkEndGame(): void {
    if (!state.gameOngoing || state.endGameStarted) return;
    if (mod.GetMatchTimeRemaining() > 1 && getTeamScore(team(TEAM_1_ID)) > 0 && getTeamScore(team(TEAM_2_ID)) > 0) return;
    void endConquest();
}

// Finalizes the round and chooses the winning team from remaining tickets.
async function endConquest(): Promise<void> {
    state.endGameStarted = true;
    state.gameOngoing = false;
    mod.PauseGameModeTime(true);
    setTeamScore(team(TEAM_1_ID), getTeamScore(team(TEAM_1_ID)));
    setTeamScore(team(TEAM_2_ID), getTeamScore(team(TEAM_2_ID)));

    const team1Score = getTeamScore(team(TEAM_1_ID));
    const team2Score = getTeamScore(team(TEAM_2_ID));
    if (team1Score > team2Score) {
        mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1, team(TEAM_1_ID));
    } else if (team2Score > team1Score) {
        mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1, team(TEAM_2_ID));
    }

    updateAllHud();
    await mod.Wait(1);
    mod.PlayMusic(mod.MusicEvents.Core_EndOfRound_Loop);
    mod.SetHUDTicker(mod.GameModeTicker.None);
    createEndScreen(team1Score, team2Score);
    await mod.Wait(4);
    deleteEndScreenWidgets();

    if (team1Score > team2Score) {
        mod.EndGameMode(team(TEAM_1_ID));
    } else if (team2Score > team1Score) {
        mod.EndGameMode(team(TEAM_2_ID));
    } else {
        mod.EndGameMode(team(NEUTRAL_TEAM_ID));
    }
    cleanupCaptureSounds();
}

function deleteEndScreenWidgets(): void {
    const widgetNames = [
        "ConquestEndScreen_Overlay",
        endScreenWidgetName(team(TEAM_1_ID), "Left"),
        endScreenWidgetName(team(TEAM_1_ID), "Right"),
        endScreenWidgetName(team(TEAM_1_ID), "Result"),
        endScreenWidgetName(team(TEAM_2_ID), "Left"),
        endScreenWidgetName(team(TEAM_2_ID), "Right"),
        endScreenWidgetName(team(TEAM_2_ID), "Result"),
    ];
    for (const name of widgetNames) {
        if (mod.HasUIWidgetWithName(name)) mod.DeleteUIWidget(find(name));
    }
}

function endScreenWidgetName(viewerTeam: mod.Team, suffix: string): string {
    return widgetName(["ConquestEndScreen", teamId(viewerTeam), suffix]);
}

function createEndScreen(team1Score: number, team2Score: number): void {
    if (state.enableTimerUI && mod.HasUIWidgetWithName("ConquestTimer")) {
        const timer = find("ConquestTimer");
        mod.SetUIWidgetSize(timer, mod.CreateVector(190, 60, 0));
        mod.SetUITextSize(timer, 48);
        mod.SetUIWidgetPosition(timer, mod.CreateVector(0, 390, 0));
    }

    const team1RootName = scoreRootName(team(TEAM_1_ID));
    const team2RootName = scoreRootName(team(TEAM_2_ID));
    if (mod.HasUIWidgetWithName(team1RootName)) mod.DeleteUIWidget(find(team1RootName));
    if (mod.HasUIWidgetWithName(team2RootName)) mod.DeleteUIWidget(find(team2RootName));

    const sharedRootName = sharedHudRootName();
    if (!mod.HasUIWidgetWithName(sharedRootName)) return;
    const sharedRoot = find(sharedRootName);
    const overlayName = "ConquestEndScreen_Overlay";
    mod.AddUIContainer(
        overlayName,
        mod.CreateVector(0, 0, 0),
        mod.CreateVector(20000, 20000, 0),
        mod.UIAnchor.TopCenter,
        sharedRoot,
        true,
        0,
        BLACK(),
        0.5,
        mod.UIBgFill.Solid,
        mod.UIDepth.AboveGameUI,
    );

    createEndScreenForTeam(sharedRoot, team(TEAM_1_ID), team1Score, team2Score);
    createEndScreenForTeam(sharedRoot, team(TEAM_2_ID), team2Score, team1Score);
    void animateAndRevealEndScreen(team1Score, team2Score);
}

function createEndScreenForTeam(root: mod.UIWidget, viewerTeam: mod.Team, ownScore: number, enemyScore: number): void {
    mod.AddUIText(
        endScreenWidgetName(viewerTeam, "Left"),
        mod.CreateVector(-300, 385, 0),
        mod.CreateVector(200, 70, 0),
        mod.UIAnchor.TopCenter,
        root,
        false,
        0,
        mod.CreateVector(0, 0.3, 0.5),
        0.4,
        mod.UIBgFill.Solid,
        message("{}", ownScore),
        64,
        TEAM_1_TEXT(),
        1,
        mod.UIAnchor.Center,
        mod.UIDepth.AboveGameUI,
        viewerTeam,
    );
    mod.AddUIText(
        endScreenWidgetName(viewerTeam, "Right"),
        mod.CreateVector(300, 385, 0),
        mod.CreateVector(200, 70, 0),
        mod.UIAnchor.TopCenter,
        root,
        false,
        0,
        TEAM_2_BG(),
        0.4,
        mod.UIBgFill.Solid,
        message("{}", enemyScore),
        64,
        TEAM_2_TEXT(),
        1,
        mod.UIAnchor.Center,
        mod.UIDepth.AboveGameUI,
        viewerTeam,
    );
    mod.AddUIText(
        endScreenWidgetName(viewerTeam, "Result"),
        mod.CreateVector(0, 200, 0),
        mod.CreateVector(10000, 0, 0),
        mod.UIAnchor.TopCenter,
        root,
        true,
        0,
        mod.CreateVector(0.5, 0.5, 0.5),
        0.4,
        mod.UIBgFill.Solid,
        message(""),
        64,
        WHITE(),
        1,
        mod.UIAnchor.Center,
        mod.UIDepth.AboveGameUI,
        viewerTeam,
    );
}

async function animateAndRevealEndScreen(team1Score: number, team2Score: number): Promise<void> {
    const team1ResultName = endScreenWidgetName(team(TEAM_1_ID), "Result");
    const team2ResultName = endScreenWidgetName(team(TEAM_2_ID), "Result");
    for (let height = 0; height <= 75; height += 5) {
        if (mod.HasUIWidgetWithName(team1ResultName)) {
            mod.SetUIWidgetSize(find(team1ResultName), mod.CreateVector(10000, height, 0));
        }
        if (mod.HasUIWidgetWithName(team2ResultName)) {
            mod.SetUIWidgetSize(find(team2ResultName), mod.CreateVector(10000, height, 0));
        }
        await mod.Wait(0.033);
    }

    revealEndScreenForTeam(team(TEAM_1_ID), team1Score, team2Score);
    revealEndScreenForTeam(team(TEAM_2_ID), team2Score, team1Score);
}

function revealEndScreenForTeam(viewerTeam: mod.Team, ownScore: number, enemyScore: number): void {
    const resultName = endScreenWidgetName(viewerTeam, "Result");
    if (mod.HasUIWidgetWithName(resultName)) {
        const result = find(resultName);
        if (ownScore > enemyScore) {
            mod.SetUIWidgetBgColor(result, mod.CreateVector(0, 0.3, 0.5));
            mod.SetUITextColor(result, TEAM_1_TEXT());
            mod.SetUITextLabel(result, message("VICTORY"));
        } else if (enemyScore > ownScore) {
            mod.SetUIWidgetBgColor(result, TEAM_2_BG());
            mod.SetUITextColor(result, TEAM_2_TEXT());
            mod.SetUITextLabel(result, message("DEFEAT"));
        } else {
            mod.SetUIWidgetBgColor(result, mod.CreateVector(0.5, 0.5, 0.5));
            mod.SetUITextColor(result, WHITE());
            mod.SetUITextLabel(result, message("DRAW"));
        }
    }

    const leftName = endScreenWidgetName(viewerTeam, "Left");
    const rightName = endScreenWidgetName(viewerTeam, "Right");
    if (mod.HasUIWidgetWithName(leftName)) mod.SetUIWidgetVisible(find(leftName), true);
    if (mod.HasUIWidgetWithName(rightName)) mod.SetUIWidgetVisible(find(rightName), true);
}

// Awards capture score to every valid player on the newly captured objective.
function awardCapturePlayers(point: mod.CapturePoint): void {
    const owner = mod.GetCurrentOwnerTeam(point);
    const players = mod.GetPlayersOnPoint(point);

    for (let i = 0; i < countPortalArray(players); i += 1) {
        const player = portalArrayValue<mod.Player>(players, i);
        if (!mod.IsPlayerValid(player) || !mod.Equals(mod.GetTeam(player), owner)) continue;
        addPlayerScore(player, OBJECTIVE_SCORE, PlayerVar.Captures);
        mod.PlaySound(mod.GetVariable(capturedSoundGlobalVar()), 0.7, player);
    }
}

// Awards neutralization score to players pushing the objective.
function awardNeutralizePlayers(point: mod.CapturePoint): void {
    const progressOwner = mod.GetOwnerProgressTeam(point);
    const players = mod.GetPlayersOnPoint(point);

    for (let i = 0; i < countPortalArray(players); i += 1) {
        const player = portalArrayValue<mod.Player>(players, i);
        if (!mod.IsPlayerValid(player) || !mod.Equals(mod.GetTeam(player), progressOwner)) continue;
        addPlayerScore(player, OBJECTIVE_SCORE, PlayerVar.Captures);
        mod.PlaySound(mod.GetVariable(neutralizedSoundGlobalVar()), 0.7, player);
    }
}

// Plays the objective captured VO for both teams.
function playCaptureVO(point: mod.CapturePoint): void {
    if (!state.enableVO) return;
    const owner = mod.GetCurrentOwnerTeam(point);
    mod.PlayVO(mod.GetVariable(capturedVoGlobalVar()), mod.VoiceOverEvents2D.ObjectiveCaptured, voiceOverFlag(point), owner);
    mod.PlayVO(mod.GetVariable(capturedEnemyVoGlobalVar()), mod.VoiceOverEvents2D.ObjectiveCapturedEnemy, voiceOverFlag(point), otherTeam(owner));
}

// Plays the neutralized/lost VO when an objective is pushed back to neutral.
function playNeutralizedVO(point: mod.CapturePoint): void {
    if (!state.enableVO) return;
    const previousOwner = mod.GetPreviousOwnerTeam(point);
    const progressOwner = mod.GetOwnerProgressTeam(point);
    const flag = voiceOverFlag(point);
    if (teamId(previousOwner) === NEUTRAL_TEAM_ID) {
        mod.PlayVO(mod.GetVariable(neutralizedVoGlobalVar()), mod.VoiceOverEvents2D.ObjectiveCapturing, flag, progressOwner);
        return;
    }
    mod.PlayVO(mod.GetVariable(neutralizedVoGlobalVar()), mod.VoiceOverEvents2D.ObjectiveNeutralised, flag, progressOwner);
    mod.PlayVO(mod.GetVariable(lostVoGlobalVar()), mod.VoiceOverEvents2D.ObjectiveLost, flag, previousOwner);
}

function voiceOverFlag(point: mod.CapturePoint): mod.VoiceOverFlags {
    const flags = [
        mod.VoiceOverFlags.Alpha,
        mod.VoiceOverFlags.Bravo,
        mod.VoiceOverFlags.Charlie,
        mod.VoiceOverFlags.Delta,
        mod.VoiceOverFlags.Echo,
        mod.VoiceOverFlags.Foxtrot,
        mod.VoiceOverFlags.Golf,
        mod.VoiceOverFlags.Hotel,
        mod.VoiceOverFlags.India,
    ];
    return flags[Math.max(0, Math.min(flags.length - 1, flagIndex(point)))] ?? mod.VoiceOverFlags.Alpha;
}

function createPlayerHud(player: mod.Player): void {
    const rootName = widgetName(["ConquestPlayerHUD", player]);
    if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));

    mod.AddUIContainer(rootName, mod.CreateVector(0, 0, 0), mod.CreateVector(10000, 10000, 0), mod.UIAnchor.TopCenter, player);
    const root = find(rootName);
    mod.SetUIWidgetBgFill(root, mod.UIBgFill.None);
    mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);

    addText(widgetName([rootName, "OOBShade"]), mod.CreateVector(0, 0, 0), mod.CreateVector(5000, 5000, 0), root, message(""), 24, BLACK(), BLACK(), 0.9, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "OOBText"]), mod.CreateVector(0, 470, 0), mod.CreateVector(420, 150, 0), root, message("Return To Combat"), 56, TEAM_2_TEXT(), TEAM_2_BG(), 0.8, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "OOBCounter"]), mod.CreateVector(0, 560, 0), mod.CreateVector(180, 80, 0), root, message(""), 72, TEAM_2_TEXT(), BLACK(), 0, mod.UIBgFill.None, player);
    addText(widgetName([rootName, "AmmoResupplyNotice"]), mod.CreateVector(0, 320, 0), mod.CreateVector(360, 36, 0), root, message(""), 24, WHITE(), BLACK(), 0.75, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "BuildVersion"]), mod.CreateVector(650, 66, 0), mod.CreateVector(510, 24, 0), root, message(TOKAI_CONQUEST_BUILD_ID), 14, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    setPlayerOobVisible(player, false);
    setPlayerAmmoResupplyNoticeVisible(player, false);
    setPlayerBuildVersionVisible(player);
}

function playerHudWidget(player: mod.Player, suffix: string): string {
    return widgetName(["ConquestPlayerHUD", player, suffix]);
}

function setPlayerOobVisible(player: mod.Player, visible: boolean): void {
    for (const suffix of ["OOBShade", "OOBText", "OOBCounter"]) {
        const name = playerHudWidget(player, suffix);
        if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), visible);
    }
}

function setPlayerAmmoResupplyNoticeVisible(player: mod.Player, visible: boolean): void {
    const name = playerHudWidget(player, "AmmoResupplyNotice");
    if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), visible);
}

function isOobTriggerForPlayer(player: mod.Player, trigger: mod.AreaTrigger): boolean {
    const id = mod.GetObjId(trigger);
    if (id >= SHARED_OOB_TRIGGER_START && id < SHARED_OOB_TRIGGER_END) return true;
    if (id >= TEAM_2_OOB_TRIGGER_START && id < TEAM_2_OOB_TRIGGER_END) return teamId(mod.GetTeam(player)) === TEAM_2_ID;
    if (id >= TEAM_1_OOB_TRIGGER_START && id < TEAM_1_OOB_TRIGGER_END) return teamId(mod.GetTeam(player)) === TEAM_1_ID;
    return false;
}

function startOutOfBounds(player: mod.Player): void {
    if (!state.gameOngoing) return;
    const current = playerState(player);
    if (!state.enableOOB || current.ignoreOOB || current.outOfBounds || !mod.GetSoldierState(player, mod.SoldierStateBool.IsAlive)) return;
    current.outOfBounds = true;
    current.captureTick = OOB_COUNTDOWN_SECONDS;
    mod.SkipManDown(player, true);
    setTextIfPresent(playerHudWidget(player, "OOBCounter"), message("{}", current.captureTick));
    setPlayerOobVisible(player, true);
    const playerId = mod.GetObjId(player);
    if (oobCountdownLoops.has(playerId)) return;
    oobCountdownLoops.add(playerId);
    void runOutOfBoundsCountdown(player, playerId);
}

async function runOutOfBoundsCountdown(player: mod.Player, playerId: number): Promise<void> {
    for (let remaining = OOB_COUNTDOWN_SECONDS; remaining > 0; remaining -= 1) {
        const current = playerState(player);
        if (!current.outOfBounds || current.ignoreOOB || !mod.IsPlayerValid(player)) break;
        current.captureTick = remaining;
        setTextIfPresent(playerHudWidget(player, "OOBCounter"), message("{}", remaining));
        mod.PlaySound(mod.GetVariable(oobSoundGlobalVar()), 0.7, player);
        await mod.Wait(1);
    }

    const current = playerState(player);
    if (state.gameOngoing && current.outOfBounds && !current.ignoreOOB && mod.IsPlayerValid(player)) {
        mod.DealDamage(player, 10000, player);
    }
    current.captureTick = 0;
    oobCountdownLoops.delete(playerId);
}

function stopOutOfBounds(player: mod.Player): void {
    const current = playerState(player);
    if (!current.outOfBounds) return;
    current.outOfBounds = false;
    current.captureTick = 0;
    mod.SkipManDown(player, false);
    setPlayerOobVisible(player, false);
}

async function pushBackFromInvisibleWall(player: mod.Player): Promise<void> {
    if (!state.gameOngoing) return;
    const current = playerState(player);
    current.invisibleWallTriggered = true;
    const position = mod.GetObjectPosition(player);
    const velocity = mod.GetSoldierState(player, mod.SoldierStateVector.GetLinearVelocity);
    const planarVelocity = mod.CreateVector(mod.XComponentOf(velocity), 0, mod.ZComponentOf(velocity));
    const pushBackDistance = mod.GetSoldierState(player, mod.SoldierStateBool.IsInVehicle) ? -5 : -0.6;
    if (mod.GetSoldierState(player, mod.SoldierStateBool.IsVaulting)) await mod.Wait(0.35);
    mod.Teleport(player, mod.Add(position, mod.Multiply(mod.Normalize(planarVelocity), pushBackDistance)), mod.YComponentOf(mod.GetObjectRotation(player)));
}

function playCaptureTickSound(player: mod.Player, point: mod.CapturePoint, progress: number): void {
    const current = playerState(player);
    if (current.lastCaptureProgress === progress) {
        current.captureTick = 0;
        return;
    }

    current.captureTick += 1;
    if (current.captureTick % CAPTURE_TICK_SOUND_INTERVAL !== 0) return;

    const progressIncreased = progress > current.lastCaptureProgress;
    const playerIsProgressOwner = mod.Equals(mod.GetTeam(player), mod.GetOwnerProgressTeam(point));
    const takingSound = mod.GetVariable(tickSoundTakingGlobalVar());
    const losingSound = mod.GetVariable(tickSoundLosingGlobalVar());
    if ((progressIncreased && playerIsProgressOwner) || (!progressIncreased && !playerIsProgressOwner)) {
        mod.PlaySound(takingSound, 0.5, player);
    } else {
        mod.PlaySound(losingSound, 0.5, player);
    }
}

// Conquest Assault support: defenders lose when team 2 owns no objectives.
function checkConquestAssaultWin(): void {
    if (!state.conquestAssault) return;
    if (countOwnedCapturePoints(team(TEAM_2_ID)) > 0) return;
    setTeamScore(team(TEAM_2_ID), 0);
    checkEndGame();
}

export function OngoingGlobal(): void {
    if (!state.initialized) initializeConquestState();
    processOneObservedPlayerJoin();
    maybeRefreshHud();
    maybeBleedTickets();
    maybePlayStatusVO();
    checkConquestAssaultWin();
    checkEndGame();
}

// Portal event: called when the game mode starts.
export function OnGameModeStarted(): void {
    initializeConquestState();
    decideRandomNightMode();
    beginRoundTeamAssignment();
    startConquest();
}

export function OnGameModeEnding(): void {
    teamAssignmentPhase = "awaiting-game-start";
}

// Portal event: assigns a human before creating its HUD and initializes scoreboard values.
export function OnPlayerJoinGame(eventPlayer: mod.Player): void {
    if (!mod.IsPlayerValid(eventPlayer)) return;
    if (state.endGameStarted) teamAssignmentPhase = "awaiting-game-start";
    const playerId = mod.GetObjId(eventPlayer);
    const observedPhase = teamAssignmentPhase;
    const targetRoundGeneration = observedPhase === "awaiting-game-start" ? currentRoundGeneration + 1 : currentRoundGeneration;
    observedPlayerJoins.set(playerId, {
        player: eventPlayer,
        observedPhase,
        portalTeamId: teamId(mod.GetTeam(eventPlayer)),
        targetRoundGeneration,
    });
}

// SDK 1.4.1 exposes only eventNumber here; Portal runtime must confirm it equals GetObjId(player).
export function OnPlayerLeaveGame(eventNumber: number): void {
    const assignedTeamId = initialAssignedTeamIdByPlayerId.get(eventNumber);
    if (teamAssignmentPhase === "initial" && assignedTeamId === TEAM_1_ID) {
        initialTeam1Count = Math.max(0, initialTeam1Count - 1);
    }
    if (teamAssignmentPhase === "initial" && assignedTeamId === TEAM_2_ID) {
        initialTeam2Count = Math.max(0, initialTeam2Count - 1);
    }

    observedPlayerJoins.delete(eventNumber);
    completedPlayerJoinIds.delete(eventNumber);
    lateJoinAssignedPlayerIds.delete(eventNumber);
    initialTeamAssignedPlayerIds.delete(eventNumber);
    initialAssignedTeamIdByPlayerId.delete(eventNumber);
}

// Portal event: resets temporary player state and gives optional NVG equipment.
export function OnPlayerDeployed(eventPlayer: mod.Player): void {
    handleTeamAssignmentOnHumanDeploy(eventPlayer);
    const current = playerState(eventPlayer);
    current.undeployHandled = false;
    stopOutOfBounds(eventPlayer);
    setPlayerOobVisible(eventPlayer, false);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = false;
    current.outOfBounds = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;
    if (state.givePlayersNVG) mod.AddEquipment(eventPlayer, mod.Gadgets.Mask_NVG);
    if (state.givePlayersGasMask) mod.AddEquipment(eventPlayer, mod.Gadgets.Mask_Gas);
    if (state.nightMode) mod.EnableScreenEffect(eventPlayer, mod.ScreenEffects.Night, true);
    setPlayerBuildVersionVisible(eventPlayer);
}

// Portal event: clears temporary state; ticket and death settlement occurs on undeploy.
export function OnPlayerDied(eventPlayer: mod.Player, eventOtherPlayer: mod.Player, _eventDeathType: mod.DeathType, _eventWeaponUnlock: mod.WeaponUnlock): void {
    void eventOtherPlayer;
    void _eventDeathType;
    void _eventWeaponUnlock;
    const current = playerState(eventPlayer);
    stopOutOfBounds(eventPlayer);
    setPlayerOobVisible(eventPlayer, false);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;
}

// Portal event: settles one completed deployment lifecycle exactly once.
export function OnPlayerUndeploy(eventPlayer: mod.Player): void {
    const current = playerState(eventPlayer);
    stopOutOfBounds(eventPlayer);
    setPlayerOobVisible(eventPlayer, false);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;

    if (current.undeployHandled) return;
    current.undeployHandled = true;
    if (!state.gameOngoing || current.ignoreOOB) return;

    addPlayerScore(eventPlayer, 0, PlayerVar.Deaths);
    addTeamScore(mod.GetTeam(eventPlayer), -1);
    updateAllHud();
    checkEndGame();
}


// Portal event: awards score and kill count for enemy kills.
export function OnPlayerEarnedKill(eventPlayer: mod.Player, eventOtherPlayer: mod.Player, eventDeathType: mod.DeathType, _eventWeaponUnlock: mod.WeaponUnlock): void {
    void _eventWeaponUnlock;
    if (eventPlayer === undefined || eventOtherPlayer === undefined) return;
    if (!mod.IsPlayerValid(eventPlayer) || !mod.IsPlayerValid(eventOtherPlayer)) return;
    if (!state.gameOngoing) return;
    if (mod.Equals(mod.GetTeam(eventPlayer), mod.GetTeam(eventOtherPlayer))) return;
    let score = KILL_SCORE;
    if (playerState(eventPlayer).onPoint) score += ON_POINT_KILL_BONUS;
    if (mod.EventDeathTypeCompare(eventDeathType, mod.PlayerDeathTypes.Headshot)) score += HEADSHOT_KILL_BONUS;
    addPlayerScore(eventPlayer, score, PlayerVar.Kills);
}

// Portal event: awards assist score for enemy kill assists.
export function OnPlayerEarnedKillAssist(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
    if (!state.gameOngoing) return;
    if (eventPlayer === undefined || eventOtherPlayer === undefined) return;
    if (!mod.IsPlayerValid(eventPlayer) || !mod.IsPlayerValid(eventOtherPlayer)) return;
    if (mod.Equals(mod.GetTeam(eventPlayer), mod.GetTeam(eventOtherPlayer))) return;
    addPlayerScore(eventPlayer, ASSIST_SCORE, PlayerVar.Assists);
}

// Portal event: awards revive score to the reviving player.
export function OnRevived(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
    if (!state.gameOngoing) return;
    if (eventPlayer === undefined || eventOtherPlayer === undefined) return;
    if (!mod.IsPlayerValid(eventPlayer) || !mod.IsPlayerValid(eventOtherPlayer)) return;
    addPlayerScore(eventOtherPlayer, REVIVE_SCORE, PlayerVar.Revives);
}

// Portal event: awards capture score and refreshes HUD.
export function OnCapturePointCaptured(eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    awardCapturePlayers(eventCapturePoint);
    playCaptureVO(eventCapturePoint);
    updateAllHud();
    checkConquestAssaultWin();
}

// Portal event: awards neutralization score and plays neutralized/lost VO.
export function OnCapturePointLost(eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    awardNeutralizePlayers(eventCapturePoint);
    playNeutralizedVO(eventCapturePoint);
    updateAllHud();
}

// Portal event: plays the "objective capturing" VO when capture progress starts.
export function OnCapturePointCapturing(eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    if (!state.enableVO) return;
    mod.PlayVO(mod.GetVariable(capturingVoGlobalVar()), mod.VoiceOverEvents2D.ObjectiveCapturing, voiceOverFlag(eventCapturePoint), mod.GetOwnerProgressTeam(eventCapturePoint));
}

// Portal event: keeps capture tick audio current while native objective UI owns visuals.
export function OngoingCapturePoint(eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    startCaptureAudioLoop(eventCapturePoint);
}

function updateCaptureAudioForPoint(point: mod.CapturePoint): boolean {
    const pointId = mod.GetObjId(point);
    const progress = mod.GetCaptureProgress(point);
    const players = playersByCapturePoint.get(pointId) ?? [];
    let updatedAnyPlayer = false;
    for (const player of players) {
        const current = playerState(player);
        if (!current.onPoint || current.currentCapturePointId !== pointId || !playerCanReceiveCaptureAudio(player)) continue;
        updatedAnyPlayer = true;
        playCaptureTickSound(player, point, progress);
        current.lastCaptureProgress = progress;
    }
    return updatedAnyPlayer;
}

function startCaptureAudioLoop(point: mod.CapturePoint): void {
    const pointId = mod.GetObjId(point);
    if (captureAudioLoops.has(pointId)) return;
    captureAudioLoops.add(pointId);
    void runCaptureAudioLoop(point, pointId);
}

async function runCaptureAudioLoop(point: mod.CapturePoint, pointId: number): Promise<void> {
    while (state.gameOngoing && updateCaptureAudioForPoint(point)) {
        await mod.Wait(PLAYER_CAPTURE_HUD_INTERVAL_SECONDS);
    }
    captureAudioLoops.delete(pointId);
}

// Portal event: tracks players for capture tick audio; native objective UI owns visuals.
export function OnPlayerEnterCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    if (!playerCanReceiveCaptureAudio(eventPlayer)) return;
    const current = playerState(eventPlayer);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = true;
    current.currentCapturePointId = mod.GetObjId(eventCapturePoint);
    current.lastCaptureProgress = mod.GetCaptureProgress(eventCapturePoint);
    trackPlayerOnPoint(eventPlayer, eventCapturePoint);
    startCaptureAudioLoop(eventCapturePoint);
}

// Portal event: stops capture tick audio tracking when leaving an objective.
export function OnPlayerExitCapturePoint(eventPlayer: mod.Player, _eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    const current = playerState(eventPlayer);
    untrackPlayerFromPoint(eventPlayer, mod.GetObjId(_eventCapturePoint));
    current.onPoint = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;
}

// Portal event: optional team switching through interact points 998/999, plus legacy direct team points 1/2.
export function OnPlayerInteract(eventPlayer: mod.Player, eventInteractPoint: mod.InteractPoint): void {
    if (!state.gameOngoing) return;
    const id = mod.GetObjId(eventInteractPoint);
    if (id === AMMO_RESUPPLY_INTERACT_ID) {
        void resupplyPlayerAmmo(eventPlayer);
        return;
    }
    if (!state.enableTeamSwitching) return;
    if (TEAM_SWITCH_INTERACT_POINTS.includes(id)) {
        void switchPlayerToTeamIfAllowed(eventPlayer, otherTeamId(teamId(mod.GetTeam(eventPlayer))));
        return;
    }
    if (id === TEAM_1_ID) void switchPlayerToTeamIfAllowed(eventPlayer, TEAM_1_ID);
    if (id === TEAM_2_ID) void switchPlayerToTeamIfAllowed(eventPlayer, TEAM_2_ID);
}

async function resupplyPlayerAmmo(player: mod.Player): Promise<void> {
    if (!mod.IsPlayerValid(player)) return;

    const playerId = mod.GetObjId(player);
    const now = mod.GetMatchTimeElapsed();
    const lastUsed = ammoResupplyLastUsedByPlayerId.get(playerId);
    if (lastUsed !== undefined && now - lastUsed < AMMO_RESUPPLY_COOLDOWN_SECONDS) {
        const remaining = Math.ceil(AMMO_RESUPPLY_COOLDOWN_SECONDS - (now - lastUsed));
        await showPlayerAmmoResupplyNotice(player, message("Ammo station cooldown: {}s", remaining));
        return;
    }

    ammoResupplyLastUsedByPlayerId.set(playerId, now);
    refillPlayerAmmoStationSlots(player);
    await showPlayerAmmoResupplyNotice(player, message("Ammo resupplied"));
}

function refillPlayerAmmoStationSlots(player: mod.Player): void {
    if (!mod.IsPlayerValid(player) || isAiSoldier(player)) return;
    for (const slot of AMMO_MAG_REFILL_SLOTS) {
        refillPlayerAmmoStationSlot(player, slot);
    }
}

function refillPlayerAmmoStationSlot(player: mod.Player, slot: mod.InventorySlots): void {
    try {
        mod.SetInventoryMagazineAmmo(player, slot, AMMO_DIRECT_REFILL_AMOUNT);
    } catch (_error) {
        void _error;
    }
}


async function showPlayerAmmoResupplyNotice(player: mod.Player, msg: mod.Message): Promise<void> {
    const playerId = mod.GetObjId(player);
    const token = (ammoResupplyNoticeTokenByPlayerId.get(playerId) ?? 0) + 1;
    ammoResupplyNoticeTokenByPlayerId.set(playerId, token);
    setTextIfPresent(playerHudWidget(player, "AmmoResupplyNotice"), msg);
    setPlayerAmmoResupplyNoticeVisible(player, true);
    await mod.Wait(AMMO_RESUPPLY_NOTICE_SECONDS);
    if (ammoResupplyNoticeTokenByPlayerId.get(playerId) !== token || !mod.IsPlayerValid(player)) return;
    setPlayerAmmoResupplyNoticeVisible(player, false);
}

async function switchPlayerToTeamIfAllowed(player: mod.Player, targetTeamId: number): Promise<void> {
    if (!canSwitchPlayerToTeam(player, targetTeamId)) {
        await showPlayerAmmoResupplyNotice(player, message("Team switch unavailable"));
        return;
    }

    const current = playerState(player);
    current.ignoreOOB = true;
    mod.UndeployPlayer(player);
    mod.SetTeam(player, team(targetTeamId));
    await mod.Wait(2);
    current.ignoreOOB = false;
}

async function runRepelLogic(player: mod.Player, interactPoint: mod.InteractPoint): Promise<void> {
    const target = mod.GetSpatialObject(mod.GetObjId(interactPoint) + REPEL_TARGET_OFFSET);
    const playerPosition = mod.GetObjectPosition(player);
    const targetPosition = mod.GetObjectPosition(target);
    const yaw = mod.YComponentOf(mod.GetObjectRotation(player));
    const travelTime = mod.DistanceBetween(playerPosition, targetPosition) / REPEL_SPEED_DIVISOR;

    if (mod.YComponentOf(targetPosition) > mod.YComponentOf(playerPosition)) {
        const liftPosition = mod.Add(
            mod.CreateVector(mod.XComponentOf(playerPosition), mod.YComponentOf(targetPosition), mod.ZComponentOf(playerPosition)),
            mod.UpVector(),
        );
        mod.Teleport(player, liftPosition, yaw);
    } else {
        mod.Teleport(player, mod.CreateVector(mod.XComponentOf(targetPosition), mod.YComponentOf(playerPosition), mod.ZComponentOf(targetPosition)), yaw);
        await mod.Wait(0.1);
        mod.Teleport(player, mod.Add(targetPosition, mod.Multiply(mod.UpVector(), 3)), yaw);
    }

    await mod.Wait(travelTime + 0.1);
    mod.Teleport(player, targetPosition, yaw);
}

// Portal event: shows the out-of-bounds warning UI when enabled.
export function OnPlayerEnterAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
    if (!state.gameOngoing) return;
    const triggerId = mod.GetObjId(eventAreaTrigger);
    if (triggerId === INVISIBLE_WALL_AREA_TRIGGER_ID) {
        void pushBackFromInvisibleWall(eventPlayer);
        return;
    }
    if (isOobTriggerForPlayer(eventPlayer, eventAreaTrigger)) startOutOfBounds(eventPlayer);
}

// Portal event: hides the out-of-bounds warning UI.
export function OnPlayerExitAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
    if (!state.gameOngoing) return;
    const triggerId = mod.GetObjId(eventAreaTrigger);
    if (triggerId === INVISIBLE_WALL_AREA_TRIGGER_ID) {
        playerState(eventPlayer).invisibleWallTriggered = false;
        return;
    }
    if (isOobTriggerForPlayer(eventPlayer, eventAreaTrigger)) stopOutOfBounds(eventPlayer);
}

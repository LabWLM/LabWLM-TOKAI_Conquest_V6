import * as modlib from "modlib";

const TOKAI_CONQUEST_RELEASE_BUILD_ID = "TOKAI CONQUEST 2.0 ABBASID COMMANDER RELEASE";

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
// Keep this higher than the ticket scores so Portal's built-in score win condition does not end the match immediately.
const GAME_MODE_TARGET_SCORE = 10000;
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
const AMMO_RESUPPLY_VFX_IDS = [2300, 2301, 2302, 2303, 2304];
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
const RECENT_DEATH_UNDEPLOY_GRACE_SECONDS = 0.5;
const COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET = mod.Gadgets.Misc_PortalGadget;
const COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET_SLOT = mod.InventorySlots.GadgetTwo;
const TEAM_1_COMMANDER_FIXED_HUD_TEST_CAMERA_OBJECT_ID = 3000;
const TEAM_2_COMMANDER_FIXED_HUD_TEST_CAMERA_OBJECT_ID = 3001;
const COMMANDER_FIXED_HUD_TEST_REQUEST_OBJECT_VAR = 98;
const COMMANDER_ELECTION_CANDIDACY_SECONDS = 20;
const COMMANDER_ELECTION_VOTING_SECONDS = 15;
const COMMANDER_ELECTION_MAX_CANDIDATES = 5;
const COMMANDER_ELECTION_RESTRICT_REAPPLY_SECONDS = 0.2;
const COMMANDER_ELECTION_AI_FREEZE_REAPPLY_SECONDS = 0.2;
const COMMANDER_ELECTION_AI_INPUT_BATCH_INTERVAL_SECONDS = 0.05;
const COMMANDER_ELECTION_AI_INPUT_BATCH_MAX_CALLS = 60;
const COMMANDER_ELECTION_AI_IDLE_REAPPLY_SECONDS = 2;
const COMMANDER_ELECTION_LOCK_MOVEMENT = false;
const COMMANDER_CAMERA_MOVE_TICK_SECONDS = 0.05;
const COMMANDER_CAMERA_MOVE_MAX_DELTA_SECONDS = 0.15;
const COMMANDER_CAMERA_TARGET_PAN_SPEED = 36;
const COMMANDER_CAMERA_INPUT_VELOCITY_DEADZONE = 0.0005;
const COMMANDER_CAMERA_PAN_ACCELERATION_RATE = 7;
const COMMANDER_CAMERA_PAN_DECELERATION_RATE = 10;
const COMMANDER_CAMERA_PAN_STOP_SPEED = 0.05;
const COMMANDER_CAMERA_MIN_MOVE_DELTA = 0.01;
const COMMANDER_CAMERA_PLAYER_SPEED_MULTIPLIER = 0.001;
const COMMANDER_CAMERA_HEIGHT_STEP = 100;
const COMMANDER_CAMERA_HEIGHT_MIN_DELTA = -200;
const COMMANDER_CAMERA_HEIGHT_MAX_DELTA = 200;
const COMMANDER_CAMERA_HEIGHT_INPUT_COOLDOWN_SECONDS = 0.35;
const COMMANDER_VIEW_ALT_SCALE_X = 374;
const COMMANDER_VIEW_ALT_SCALE_TOP_Y = 270;
const COMMANDER_VIEW_ALT_SCALE_STEP_Y = 110;
const COMMANDER_VIEW_ALT_MARKER_X = 332;
const COMMANDER_CAMERA_ALT_100_PAN_SCALE = 1;
const COMMANDER_CAMERA_ALT_200_PAN_SCALE = 1.2;
const COMMANDER_CAMERA_ALT_300_PLUS_PAN_SCALE = 1.5;
const COMMANDER_ABILITY_MENU_X = 150;
const COMMANDER_ABILITY_MENU_TOP_Y = 685;
const COMMANDER_ABILITY_MENU_WIDTH = 220;
const COMMANDER_ABILITY_MENU_HEADER_HEIGHT = 28;
const COMMANDER_ABILITY_MENU_ROW_HEIGHT = 34;
const COMMANDER_ABILITY_STATUS_HUD_X = -415;
const COMMANDER_ABILITY_STATUS_HUD_Y = 385;
const COMMANDER_ABILITY_STATUS_HUD_WIDTH = 155;
const COMMANDER_ABILITY_STATUS_HUD_ROW_HEIGHT = 58;
const COMMANDER_ABILITY_STATUS_HUD_LINE_HEIGHT = 20;
const COMMANDER_GROUND_RAYCAST_START_Y = 2000;
const COMMANDER_GROUND_RAYCAST_END_Y = -500;
const COMMANDER_GROUND_RAYCAST_TIMEOUT_SECONDS = 1.5;
const COMMANDER_UI_RANGE_RING_SEGMENTS = 64;
const COMMANDER_UI_RANGE_RING_DOT_SIZE = 4;
const COMMANDER_UI_RANGE_RING_CENTER_MARKER_SIZE = 8;
const COMMANDER_UI_RANGE_RING_PROJECTION_FACTOR = 1035;
const COMMANDER_UI_RANGE_RING_SCREEN_CENTER_X = 0;
const COMMANDER_UI_RANGE_RING_SCREEN_CENTER_Y = 540;
const COMMANDER_UI_RANGE_RING_UAV_RADIUS_METERS = 25;
const COMMANDER_UI_RANGE_RING_AIR_RADIUS_METERS = 15;
const COMMANDER_UI_RANGE_CLICK_PREVIEW_SECONDS = 2;
const COMMANDER_UI_RANGE_HOVER_PREVIEW_SECONDS = 999999;
const COMMANDER_UAV_RADIUS_METERS = 25;
const COMMANDER_UAV_DURATION_SECONDS = 15;
const COMMANDER_UAV_SPOT_INTERVAL_SECONDS = 2;
const COMMANDER_UAV_SPOT_DURATION_SECONDS = 2.5;
const COMMANDER_AIRSTRIKE_RADIUS_METERS = 15;
const COMMANDER_AIRSTRIKE_DAMAGE_AMOUNT = 250;
const COMMANDER_AIRSTRIKE_COOLDOWN_SECONDS = 150;
const COMMANDER_ARTILLERY_COOLDOWN_SECONDS = 90;
const COMMANDER_UAV_COOLDOWN_SECONDS = 60;
const COMMANDER_SMOKE_BARRAGE_COOLDOWN_SECONDS = 60;
const COMMANDER_MAP_VFX_GROUND_Y_OFFSET = 0.25;
const COMMANDER_MAP_VFX_VISIBLE_SECONDS = 5;
const COMMANDER_MAP_VFX_RETRIGGER_SECONDS = 0.08;
const COMMANDER_PRECISION_AIRSTRIKE_DELAY_SECONDS = 4;
const COMMANDER_PRECISION_AIRSTRIKE_IMPACT_INTERVAL_SECONDS = 0.08;
const COMMANDER_PRECISION_AIRSTRIKE_IMPACT_OFFSET_METERS = 2;
const COMMANDER_PRECISION_AIRSTRIKE_KILL_CHECK_SECONDS = 0.35;
const COMMANDER_PRECISION_AIRSTRIKE_CREDIT_CHECK_SECONDS = 0.65;
const COMMANDER_PRECISION_AIRSTRIKE_IMPACT_VFX_IDS = [2460, 2461, 2462, 2463, 2464];

// HUD colors. The first vector is text/bar color, the second is the background color.
const TEAM_1_TEXT = () => mod.CreateVector(0, 0.8, 1);
const TEAM_1_BG = () => mod.CreateVector(0, 0.2, 0.5);
const TEAM_2_TEXT = () => mod.CreateVector(1, 0.2, 0.2);
const TEAM_2_BG = () => mod.CreateVector(0.6, 0.1, 0.1);
const WHITE = () => mod.CreateVector(1, 1, 1);
const BLACK = () => mod.CreateVector(0, 0, 0);

const commanderElectionRestrictedInputs = [
    mod.RestrictedInputs.MoveForwardBack,
    mod.RestrictedInputs.MoveLeftRight,
    mod.RestrictedInputs.Jump,
    mod.RestrictedInputs.Sprint,
    mod.RestrictedInputs.Crouch,
    mod.RestrictedInputs.Prone,
];

const commanderElectionAiFreezeRestrictedInputs = [
    mod.RestrictedInputs.MoveForwardBack,
    mod.RestrictedInputs.MoveLeftRight,
    mod.RestrictedInputs.Sprint,
    mod.RestrictedInputs.Jump,
    mod.RestrictedInputs.Crouch,
    mod.RestrictedInputs.Prone,
    mod.RestrictedInputs.Interact,
    mod.RestrictedInputs.Zoom,
    mod.RestrictedInputs.FireWeapon,
    mod.RestrictedInputs.Reload,
    mod.RestrictedInputs.CycleFire,
    mod.RestrictedInputs.CyclePrimary,
    mod.RestrictedInputs.SelectPrimary,
    mod.RestrictedInputs.SelectSecondary,
    mod.RestrictedInputs.SelectThrowable,
    mod.RestrictedInputs.SelectCharacterGadget,
    mod.RestrictedInputs.SelectOpenGadget,
    mod.RestrictedInputs.SelectMelee,
];

// Objective labels shown in the top HUD. Add more letters if your map has more than 26 capture points.
const FLAG_LETTERS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];


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
    lastObjectiveLabel: string;
    lastObjectiveFriendlyCount: number;
    lastObjectiveEnemyCount: number;
    lastObjectiveTextColorKey: number;
    lastObjectiveProgressColorKey: number;
    lastObjectiveProgress: number;
    objectiveHudVisible: boolean;
    captureTick: number;
    outOfBounds: boolean;
    ignoreOOB: boolean;
    invisibleWallTriggered: boolean;
    lastDeathTime: number;
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
    enableVO: boolean;
    enableOOB: boolean;
    enableVehicleSpawns: boolean;
    givePlayersNVG: boolean;
    givePlayersGasMask: boolean;
    nightMode: boolean;
    conquestAssault: boolean;
    endGameStarted: boolean;
    lastBleedTeamId: number;
    lastBleedTime: number;
    lastHudFlashTick: number;
    lastCaptureFlashTick: number;
    captureFlashLoopRunning: boolean;
};

type CommanderElectionPhase = "idle" | "candidacy" | "voting" | "complete";

type TeamElectionState = {
    candidates: mod.Player[];
    votesByVoterId: Map<number, number>;
};

type CommanderRuntime = {
    commander?: mod.Player;
    succession: mod.Player[];
    vacant: boolean;
};

type CommanderElectionState = {
    phase: CommanderElectionPhase;
    runId: number;
    countdownRemaining: number;
    team1: TeamElectionState;
    team2: TeamElectionState;
    runtimeTeam1: CommanderRuntime;
    runtimeTeam2: CommanderRuntime;
    gameplayStarted: boolean;
};

type CommanderCameraMoveState = {
    player: mod.Player;
    cameraObjectId: number;
    initialCameraTransform: mod.Transform;
    initialCameraPosition: mod.Vector;
    currentCameraPosition: mod.Vector;
    appliedCameraPosition: mod.Vector;
    smoothedPanVelocity: mod.Vector;
    lastMoveTickTime: number;
    commanderStartTransform: mod.Transform;
    commanderStartPosition: mod.Vector;
    commanderStartRotation: mod.Vector;
    commanderStartYaw: number;
    bodyLockActiveLogged: boolean;
    bodyLockFailLogged: boolean;
    lastHeightInputTime: number;
    loopRunId: number;
};

type CommanderAbilityId = "UAV" | "Airstrike" | "Artillery" | "SmokeBarrage";

type CommanderAbilityMenuState = {
    player: mod.Player;
    selectedIndex: number;
    fireReleasedAfterOpen: boolean;
};

type CommanderAbilityRequest = {
    sequence: number;
    commanderPlayerId: number;
    ability: CommanderAbilityId;
    kind: "click" | "hover";
    targetX: number;
    targetZ: number;
    targetY?: number;
    groundResolution: "unresolved" | "hit" | "miss";
    createdAt: number;
};

type CommanderAbilityRuntime = {
    cooldownUntil: number;
    activeUntil: number;
    pendingUntil: number;
    runId: number;
    lastGround?: mod.Vector;
};

type CommanderInitialCooldownState = {
    uavUnlockUntil: number;
    airstrikeUnlockUntil: number;
};

type CommanderAbilityGroundRequest = {
    sequence: number;
    player: mod.Player;
    ability: CommanderAbilityId;
    kind: "click" | "hover";
    targetX: number;
    targetZ: number;
    createdAt: number;
};

type CommanderUiRangeRingSpec = {
    radius: number;
    color: mod.Vector;
    alpha: number;
    suffix: string;
};

type CommanderUiRangeRingState = {
    player: mod.Player;
    runId: number;
    center: mod.Vector;
    targetGroundY: number;
    expiresAt: number;
    specs: CommanderUiRangeRingSpec[];
    rootName: string;
    centerMarkerName: string;
    originScreenCenter: mod.Vector;
    lastProjectedCenter: mod.Vector;
    lastRootPosition: mod.Vector;
    lastVerticalDistance: number;
    lastPixelsPerMeter: number;
    trackOkLogged: boolean;
    trackFailLogged: boolean;
    rootTrackOkLogged: boolean;
    rootTrackFailLogged: boolean;
};

type CommanderPrecisionAirstrikeDamageState = {
    commander: mod.Player;
    runId: number;
    targets: mod.Player[];
    targetIds: Set<number>;
    healthBeforeByTargetId: Map<number, number>;
    killCreditConfirmed: boolean;
};

const COMMANDER_ABILITY_MENU_ENTRIES: Array<{ id?: CommanderAbilityId }> = [
    { id: "UAV" },
    { id: "Airstrike" },
    { id: "Artillery" },
    { id: "SmokeBarrage" },
    {},
];

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
    enableVO: true,
    enableOOB: true,
    enableVehicleSpawns: true,
    givePlayersNVG: false,
    givePlayersGasMask: false,
    nightMode: false,
    conquestAssault: false,
    endGameStarted: false,
    lastBleedTeamId: NEUTRAL_TEAM_ID,
    lastBleedTime: -1,
    lastHudFlashTick: -1,
    lastCaptureFlashTick: -1,
    captureFlashLoopRunning: false,
};

const commanderElection: CommanderElectionState = {
    phase: "idle",
    runId: 0,
    countdownRemaining: 0,
    team1: { candidates: [], votesByVoterId: new Map<number, number>() },
    team2: { candidates: [], votesByVoterId: new Map<number, number>() },
    runtimeTeam1: { succession: [], vacant: true },
    runtimeTeam2: { succession: [], vacant: true },
    gameplayStarted: false,
};

// Runtime player state for the current match. This replaces Portal variables for values that do not need persistence.
const playerStates = new Map<number, PlayerState>();
const objectiveHudLoops = new Set<number>();
const playerCaptureHudLoops = new Set<number>();
const oobCountdownLoops = new Set<number>();
const playersByCapturePoint = new Map<number, mod.Player[]>();
const captureProgressHudByPoint = new Map<number, CaptureProgressHudState>();
const ammoResupplyLastUsedByPlayerId = new Map<number, number>();
const ammoResupplyNoticeTokenByPlayerId = new Map<number, number>();
const spawnedCaptureSoundObjects: mod.Object[] = [];
const commanderFixedHudTestDesiredPlayerIds = new Set<number>();
const commanderFixedHudTestActivePlayerIds = new Set<number>();
const commanderCameraMoveStatesByPlayerId = new Map<number, CommanderCameraMoveState>();
const commanderAbilityMenuStatesByPlayerId = new Map<number, CommanderAbilityMenuState>();
const commanderAbilityRequestsByPlayerId = new Map<number, CommanderAbilityRequest>();
const commanderAbilityRuntimeByPlayerId = new Map<number, Map<CommanderAbilityId, CommanderAbilityRuntime>>();
const commanderInitialCooldownByPlayerId = new Map<number, CommanderInitialCooldownState>();
const commanderAbilityGroundRequestsByPlayerId = new Map<number, CommanderAbilityGroundRequest>();
const commanderUiRangeRingStatesByPlayerId = new Map<number, CommanderUiRangeRingState>();
const commanderAbilityButtonIndexesByName = new Map<string, number>();
const commanderPrecisionAirstrikeDamageStatesByCommanderId = new Map<number, CommanderPrecisionAirstrikeDamageState>();
const commanderMapVfxTokensById = new Map<number, number>();
const spawnedCommanderAbilityObjects: mod.Object[] = [];
const commanderAbilityButtonHandlers = new Map<string, (player: mod.Player) => void>();
const commanderElectionRestrictedPlayerIds = new Set<number>();
const commanderElectionAiFrozenPlayerIds = new Set<number>();
const commanderPortalGadgetPlayerIds = new Set<number>();
const commanderElectionButtonHandlers = new Map<string, (player: mod.Player) => void>();
let commanderElectionAiInputBatchPlayerIndex = 0;
let commanderElectionAiInputBatchInputIndex = 0;
let commanderCameraMoveLoopRunId = 0;
let commanderAbilityRequestSequence = 0;
let commanderAbilityRunSequence = 0;
let commanderUiRangeRingRunSequence = 0;
let commanderRangePreviewRequestSequence = 0;
let commanderMapVfxTokenSequence = 0;

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
        lastObjectiveLabel: "",
        lastObjectiveFriendlyCount: -1,
        lastObjectiveEnemyCount: -1,
        lastObjectiveTextColorKey: -1,
        lastObjectiveProgressColorKey: -1,
        lastObjectiveProgress: -1,
        objectiveHudVisible: false,
        captureTick: 0,
        outOfBounds: false,
        ignoreOOB: false,
        invisibleWallTriggered: false,
        lastDeathTime: -1,
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
    mod.SetGameModeScore(teamValue, clamped);
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

function addLeftText(
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
            mod.UIAnchor.CenterLeft,
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
        mod.UIAnchor.CenterLeft,
        receiver,
    );
}

function addContainer(
    name: string,
    position: mod.Vector,
    size: mod.Vector,
    parent: mod.UIWidget,
    color: mod.Vector,
    alpha: number,
    fill: mod.UIBgFill,
    receiver?: mod.Player | mod.Team,
): void {
    if (receiver === undefined) {
        mod.AddUIContainer(name, position, size, mod.UIAnchor.TopCenter, parent, true, 0, color, alpha, fill);
        return;
    }

    mod.AddUIContainer(name, position, size, mod.UIAnchor.TopCenter, parent, true, 0, color, alpha, fill, receiver);
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

type PointOccupancy = {
    players: PlayerCollection;
    team1Count: number;
    team2Count: number;
};

type PlayerCollection = mod.Array | mod.Player[];

type CaptureProgressHudState = {
    progress: number;
    progressSize: mod.Vector;
    progressPosition: mod.Vector;
};

// Counts players from one team on a capture point for the player objective HUD.
function countPlayersInArray(players: PlayerCollection, owner: mod.Team): number {
    let count = 0;

    for (let i = 0; i < countPlayers(players); i += 1) {
        const player = playerValue(players, i);
        if (mod.IsPlayerValid(player) && mod.GetSoldierState(player, mod.SoldierStateBool.IsAlive) && mod.Equals(mod.GetTeam(player), owner)) count += 1;
    }

    return count;
}

function countPlayers(players: PlayerCollection): number {
    return Array.isArray(players) ? players.length : countPortalArray(players);
}

function playerValue(players: PlayerCollection, index: number): mod.Player {
    return Array.isArray(players) ? players[index] : portalArrayValue<mod.Player>(players, index);
}

function allPlayers(): mod.Player[] {
    const players = mod.AllPlayers();
    const result: mod.Player[] = [];
    for (let i = 0; i < countPortalArray(players); i += 1) {
        result.push(portalArrayValue<mod.Player>(players, i));
    }
    return result;
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

function isHumanPlayer(player: mod.Player): boolean {
    return mod.IsPlayerValid(player) && !isAiSoldier(player);
}

function allHumanPlayers(): mod.Player[] {
    return allPlayers().filter((player) => isHumanPlayer(player));
}

function allAiSoldiers(): mod.Player[] {
    return allPlayers().filter((player) => isAiSoldier(player));
}

function isPlayerInVehicle(player: mod.Player): boolean {
    if (!mod.IsPlayerValid(player)) return false;
    try {
        return mod.GetSoldierState(player, mod.SoldierStateBool.IsInVehicle);
    } catch (_error) {
        void _error;
        return false;
    }
}

function pointOccupancy(point: mod.CapturePoint): PointOccupancy {
    const players = mod.GetPlayersOnPoint(point);
    return {
        players,
        team1Count: countPlayersInArray(players, team(TEAM_1_ID)),
        team2Count: countPlayersInArray(players, team(TEAM_2_ID)),
    };
}

function captureProgressHud(point: mod.CapturePoint): CaptureProgressHudState {
    const pointId = mod.GetObjId(point);
    const existing = captureProgressHudByPoint.get(pointId);
    if (existing !== undefined) return existing;
    return updateCaptureProgressHud(point);
}

function updateCaptureProgressHud(point: mod.CapturePoint): CaptureProgressHudState {
    const progress = mod.GetCaptureProgress(point);
    const width = Math.max(2, Math.floor(220 * progress));
    const stateForPoint = {
        progress,
        progressSize: mod.CreateVector(width, 7, 0),
        progressPosition: mod.CreateVector(-110 + width / 2, 200, 0),
    };
    captureProgressHudByPoint.set(mod.GetObjId(point), stateForPoint);
    return stateForPoint;
}

function trackedPointOccupancy(point: mod.CapturePoint): PointOccupancy {
    const pointId = mod.GetObjId(point);
    const onPoint = playersByCapturePoint.get(pointId) ?? [];
    const validPlayers: mod.Player[] = [];
    for (const player of onPoint) {
        const current = playerState(player);
        if (current.onPoint && current.currentCapturePointId === pointId && mod.IsPlayerValid(player)) validPlayers.push(player);
    }

    return {
        players: validPlayers,
        team1Count: countPlayersInArray(validPlayers, team(TEAM_1_ID)),
        team2Count: countPlayersInArray(validPlayers, team(TEAM_2_ID)),
    };
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

function friendlyCountForTeam(occupancy: PointOccupancy, teamValue: mod.Team): number {
    return teamId(teamValue) === TEAM_1_ID ? occupancy.team1Count : occupancy.team2Count;
}

function enemyCountForTeam(occupancy: PointOccupancy, teamValue: mod.Team): number {
    return teamId(teamValue) === TEAM_1_ID ? occupancy.team2Count : occupancy.team1Count;
}

function playerCanShowCaptureHud(player: mod.Player): boolean {
    return mod.IsPlayerValid(player) && mod.GetSoldierState(player, mod.SoldierStateBool.IsAlive);
}

function resetPlayerCaptureHudCache(player: mod.Player): void {
    const current = playerState(player);
    current.lastObjectiveLabel = "";
    current.lastObjectiveFriendlyCount = -1;
    current.lastObjectiveEnemyCount = -1;
    current.lastObjectiveTextColorKey = -1;
    current.lastObjectiveProgressColorKey = -1;
    current.lastObjectiveProgress = -1;
}

function flagIndex(point: mod.CapturePoint): number {
    return mod.GetObjId(point) - CAPTURE_POINT_BASE_ID;
}

function flagLetter(point: mod.CapturePoint): string {
    const index = flagIndex(point);
    return FLAG_LETTERS[index] ?? String(index + 1);
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
    resetPlayerCaptureHudCache(player);
    current.objectiveHudVisible = false;
    current.captureTick = 0;
    current.outOfBounds = false;
    current.ignoreOOB = false;
    current.invisibleWallTriggered = false;
    current.lastDeathTime = -1;
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

function teamElectionState(teamValue: mod.Team): TeamElectionState | undefined {
    const id = teamId(teamValue);
    if (id === TEAM_1_ID) return commanderElection.team1;
    if (id === TEAM_2_ID) return commanderElection.team2;
    return undefined;
}

function teamCommanderRuntime(teamValue: mod.Team): CommanderRuntime | undefined {
    const id = teamId(teamValue);
    if (id === TEAM_1_ID) return commanderElection.runtimeTeam1;
    if (id === TEAM_2_ID) return commanderElection.runtimeTeam2;
    return undefined;
}

function isCommanderElectionActive(): boolean {
    return commanderElection.phase === "candidacy" || commanderElection.phase === "voting";
}

function commanderElectionUiRootName(player: mod.Player): string {
    return widgetName(["CommanderElectionUI", mod.GetObjId(player)]);
}

function commanderElectionCandidateButtonName(player: mod.Player): string {
    return widgetName(["CommanderElectionUI", mod.GetObjId(player), "CandidateButton"]);
}

function commanderElectionVoteButtonName(player: mod.Player, candidate: mod.Player): string {
    return widgetName(["CommanderElectionUI", mod.GetObjId(player), "VoteButton", mod.GetObjId(candidate)]);
}

function isCandidateForTeam(player: mod.Player, teamState: TeamElectionState): boolean {
    const playerId = mod.GetObjId(player);
    return teamState.candidates.some((candidate) => mod.GetObjId(candidate) === playerId);
}

function candidateById(teamState: TeamElectionState, candidateId: number): mod.Player | undefined {
    return teamState.candidates.find((candidate) => mod.GetObjId(candidate) === candidateId);
}

function candidateOrder(teamState: TeamElectionState, candidateId: number): number {
    const index = teamState.candidates.findIndex((candidate) => mod.GetObjId(candidate) === candidateId);
    return index < 0 ? 999 : index;
}

function validSameTeamCandidates(teamValue: mod.Team): mod.Player[] {
    const teamState = teamElectionState(teamValue);
    if (teamState === undefined) return [];
    return teamState.candidates.filter((candidate) => isHumanPlayer(candidate) && mod.Equals(mod.GetTeam(candidate), teamValue));
}

function otherTeamNeedsCommanderVote(playerTeam: mod.Team): boolean {
    const otherCandidates = validSameTeamCandidates(otherTeam(playerTeam));
    return otherCandidates.length > 1;
}

function applyCommanderElectionRestrictions(player: mod.Player, restricted: boolean): void {
    if (!mod.IsPlayerValid(player)) return;
    if (!isHumanPlayer(player)) return;
    const playerId = mod.GetObjId(player);
    if (!isPlayerAlive(player)) {
        if (!restricted) commanderElectionRestrictedPlayerIds.delete(playerId);
        return;
    }

    if (restricted && !COMMANDER_ELECTION_LOCK_MOVEMENT) {
        commanderElectionRestrictedPlayerIds.delete(playerId);
        return;
    }

    for (const input of commanderElectionRestrictedInputs) {
        try {
            mod.EnableInputRestriction(player, input, restricted);
        } catch (_error) {
            void _error;
        }
    }
    try {
        mod.SetPlayerMovementSpeedMultiplier(player, restricted ? 0 : 1);
    } catch (_error) {
        void _error;
    }

    if (restricted) {
        commanderElectionRestrictedPlayerIds.add(playerId);
    } else {
        commanderElectionRestrictedPlayerIds.delete(playerId);
    }
}

function applyCommanderElectionRestrictionsToAll(restricted: boolean): void {
    for (const player of allHumanPlayers()) {
        applyCommanderElectionRestrictions(player, restricted);
    }
}

function applyCommanderElectionAiFreeze(player: mod.Player, frozen: boolean): boolean {
    if (!mod.IsPlayerValid(player)) return false;
    if (!isAiSoldier(player)) return false;
    const playerId = mod.GetObjId(player);
    if (!canApplyCommanderElectionAiFreeze(player)) {
        commanderElectionAiFrozenPlayerIds.delete(playerId);
        return false;
    }

    try {
        mod.SetPlayerMovementSpeedMultiplier(player, frozen ? 0 : 1);
    } catch (_error) {
        void _error;
    }
    try {
        mod.AISetMoveSpeed(player, frozen ? mod.MoveSpeed.InvestigateSlowWalk : mod.MoveSpeed.Run);
    } catch (_error) {
        void _error;
    }

    if (frozen) {
        commanderElectionAiFrozenPlayerIds.add(playerId);
    } else {
        commanderElectionAiFrozenPlayerIds.delete(playerId);
    }
    return true;
}

function applyCommanderElectionAiInputRestrictionBatch(restricted: boolean, maxCalls: number): void {
    const players = allAiSoldiers().filter((player) => (restricted ? canApplyCommanderElectionAiFreeze(player) : isPlayerAlive(player)));
    if (players.length <= 0) {
        commanderElectionAiInputBatchPlayerIndex = 0;
        commanderElectionAiInputBatchInputIndex = 0;
        return;
    }

    let calls = 0;
    let attempts = 0;
    const maxAttempts = players.length * commanderElectionAiFreezeRestrictedInputs.length;
    while (calls < maxCalls && attempts < maxAttempts) {
        const player = players[commanderElectionAiInputBatchPlayerIndex % players.length];
        const input = commanderElectionAiFreezeRestrictedInputs[commanderElectionAiInputBatchInputIndex % commanderElectionAiFreezeRestrictedInputs.length];
        commanderElectionAiInputBatchInputIndex += 1;
        if (commanderElectionAiInputBatchInputIndex >= commanderElectionAiFreezeRestrictedInputs.length) {
            commanderElectionAiInputBatchInputIndex = 0;
            commanderElectionAiInputBatchPlayerIndex = (commanderElectionAiInputBatchPlayerIndex + 1) % players.length;
        }
        attempts += 1;
        try {
            mod.EnableInputRestriction(player, input, restricted);
            calls += 1;
        } catch (_error) {
            void _error;
        }
    }
}

function applyCommanderElectionAiIdle(player: mod.Player): boolean {
    if (!canApplyCommanderElectionAiFreeze(player)) return false;
    try {
        mod.AIIdleBehavior(player);
    } catch (_error) {
        void _error;
    }
    return true;
}

function applyCommanderElectionAiFreezeToAll(frozen: boolean): void {
    for (const player of allAiSoldiers()) {
        applyCommanderElectionAiFreeze(player, frozen);
    }
    if (!frozen) {
        commanderElectionAiFrozenPlayerIds.clear();
    }
}

function applyCommanderElectionAiIdleToAll(): void {
    for (const player of allAiSoldiers()) {
        applyCommanderElectionAiIdle(player);
    }
}

function setCommanderElectionUiInputMode(player: mod.Player, enabled: boolean): void {
    if (!mod.IsPlayerValid(player)) return;
    if (!isHumanPlayer(player)) return;
    if (enabled && !isPlayerAlive(player)) return;
    try {
        mod.EnableUIInputMode(enabled, player);
    } catch (_error) {
        void _error;
    }
}

function setCommanderElectionUiInputModeForAll(enabled: boolean): void {
    for (const player of allHumanPlayers()) {
        setCommanderElectionUiInputMode(player, enabled);
    }
}

function clearCommanderElectionFreezeForAll(): void {
    commanderElectionRestrictedPlayerIds.clear();
    setCommanderElectionUiInputModeForAll(false);
    applyCommanderElectionRestrictionsToAll(false);
    applyCommanderElectionAiFreezeToAll(false);
    void clearCommanderElectionFreezeAfterDelay(0.25);
    void clearCommanderElectionFreezeAfterDelay(1);
}

async function clearCommanderElectionFreezeAfterDelay(delaySeconds: number): Promise<void> {
    await mod.Wait(delaySeconds);
    if (isCommanderElectionActive()) return;
    commanderElectionRestrictedPlayerIds.clear();
    setCommanderElectionUiInputModeForAll(false);
    applyCommanderElectionRestrictionsToAll(false);
    applyCommanderElectionAiFreezeToAll(false);
}

async function runCommanderElectionRestrictionLoop(runId: number): Promise<void> {
    while (commanderElection.runId === runId && isCommanderElectionActive()) {
        for (const player of allHumanPlayers()) {
            if (!commanderElectionRestrictedPlayerIds.has(mod.GetObjId(player))) continue;
            applyCommanderElectionRestrictions(player, true);
        }
        await mod.Wait(COMMANDER_ELECTION_RESTRICT_REAPPLY_SECONDS);
    }
}

async function runCommanderElectionAiFreezeLoop(runId: number): Promise<void> {
    while (commanderElection.runId === runId && isCommanderElectionActive()) {
        applyCommanderElectionAiFreezeToAll(true);
        await mod.Wait(COMMANDER_ELECTION_AI_FREEZE_REAPPLY_SECONDS);
    }
    applyCommanderElectionAiFreezeToAll(false);
}

async function runCommanderElectionAiInputRestrictionBatchLoop(runId: number): Promise<void> {
    while (commanderElection.runId === runId && isCommanderElectionActive()) {
        applyCommanderElectionAiInputRestrictionBatch(true, COMMANDER_ELECTION_AI_INPUT_BATCH_MAX_CALLS);
        await mod.Wait(COMMANDER_ELECTION_AI_INPUT_BATCH_INTERVAL_SECONDS);
    }
    for (let i = 0; i < 20; i += 1) {
        applyCommanderElectionAiInputRestrictionBatch(false, COMMANDER_ELECTION_AI_INPUT_BATCH_MAX_CALLS);
        await mod.Wait(COMMANDER_ELECTION_AI_INPUT_BATCH_INTERVAL_SECONDS);
    }
}

async function runCommanderElectionAiIdleLoop(runId: number): Promise<void> {
    while (commanderElection.runId === runId && isCommanderElectionActive()) {
        applyCommanderElectionAiIdleToAll();
        await mod.Wait(COMMANDER_ELECTION_AI_IDLE_REAPPLY_SECONDS);
    }
}

function createCommanderElectionButton(name: string, position: mod.Vector, size: mod.Vector, root: mod.UIWidget, label: mod.Message, receiver: mod.Player, handler?: (player: mod.Player) => void): void {
    const containerName = widgetName([name, "Container"]);
    const textName = widgetName([name, "Text"]);
    mod.AddUIContainer(containerName, position, size, mod.UIAnchor.TopCenter, root, true, 0, WHITE(), 0, mod.UIBgFill.None, mod.UIDepth.AboveGameUI, receiver);
    const container = find(containerName, root);
    mod.AddUIButton(
        name,
        mod.CreateVector(0, 0, 0),
        size,
        mod.UIAnchor.TopCenter,
        container,
        true,
        0,
        WHITE(),
        0.72,
        mod.UIBgFill.Blur,
        true,
        BLACK(),
        0.65,
        mod.CreateVector(0.12, 0.12, 0.12),
        0.45,
        TEAM_1_BG(),
        0.9,
        mod.CreateVector(0.18, 0.18, 0.18),
        0.8,
        TEAM_1_BG(),
        0.75,
        mod.UIDepth.AboveGameUI,
        receiver,
    );
    const button = find(name, container);
    mod.EnableUIButtonEvent(button, mod.UIButtonEvent.ButtonDown, false);
    mod.EnableUIButtonEvent(button, mod.UIButtonEvent.ButtonUp, true);
    addText(textName, mod.CreateVector(0, 0, 0), size, container, label, 18, TEAM_1_TEXT(), WHITE(), 0, mod.UIBgFill.None, receiver);
    if (handler !== undefined) commanderElectionButtonHandlers.set(name, handler);
}

function clearCommanderElectionButtonHandlersForPlayer(player: mod.Player): void {
    const prefix = commanderElectionUiRootName(player);
    for (const key of Array.from(commanderElectionButtonHandlers.keys())) {
        if (key.startsWith(prefix)) commanderElectionButtonHandlers.delete(key);
    }
}

function destroyCommanderElectionUi(player: mod.Player): void {
    clearCommanderElectionButtonHandlersForPlayer(player);
    const rootName = commanderElectionUiRootName(player);
    if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));
}

function syncCommanderElectionUi(player: mod.Player): void {
    destroyCommanderElectionUi(player);
    if (!mod.IsPlayerValid(player)) return;
    if (!isHumanPlayer(player)) return;
    if (!isPlayerAlive(player)) return;
    if (!isCommanderElectionActive()) return;
    setCommanderElectionUiInputMode(player, true);

    const playerTeam = mod.GetTeam(player);
    const teamState = teamElectionState(playerTeam);
    if (teamState === undefined) return;

    const rootName = commanderElectionUiRootName(player);
    mod.AddUIContainer(rootName, mod.CreateVector(0, 250, 0), mod.CreateVector(560, 390, 0), mod.UIAnchor.TopCenter, player);
    const root = find(rootName);
    mod.SetUIWidgetBgFill(root, mod.UIBgFill.Blur);
    mod.SetUIWidgetBgAlpha(root, 0.75);
    mod.SetUIWidgetBgColor(root, BLACK());
    mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);

    const title = commanderElection.phase === "voting" ? "COMMANDER VOTE" : "COMMANDER ELECTION";
    addText(widgetName([rootName, "Title"]), mod.CreateVector(0, 18, 0), mod.CreateVector(500, 34, 0), root, message(title), 24, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    addText(
        widgetName([rootName, "Countdown"]),
        mod.CreateVector(0, 56, 0),
        mod.CreateVector(500, 26, 0),
        root,
        message("Remaining: {}s", commanderElection.countdownRemaining),
        18,
        WHITE(),
        BLACK(),
        0,
        mod.UIBgFill.None,
        player,
    );

    if (commanderElection.phase === "candidacy") {
        const playerIsCandidate = isCandidateForTeam(player, teamState);
        let status = "Not candidate";
        if (playerIsCandidate) status = "Candidate registered";
        if (!playerIsCandidate && teamState.candidates.length >= COMMANDER_ELECTION_MAX_CANDIDATES) status = "Candidate list full";
        addText(widgetName([rootName, "Status"]), mod.CreateVector(0, 98, 0), mod.CreateVector(500, 30, 0), root, message(status), 18, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
        if (!playerIsCandidate && teamState.candidates.length < COMMANDER_ELECTION_MAX_CANDIDATES) {
            createCommanderElectionButton(
                commanderElectionCandidateButtonName(player),
                mod.CreateVector(0, 145, 0),
                mod.CreateVector(300, 42, 0),
                root,
                message("Stand as Commander"),
                player,
                handleCommanderElectionCandidateButton,
            );
        }
        addText(
            widgetName([rootName, "CandidateCount"]),
            mod.CreateVector(0, 208, 0),
            mod.CreateVector(500, 28, 0),
            root,
            message("Candidates: {}/{}", teamState.candidates.length, COMMANDER_ELECTION_MAX_CANDIDATES),
            18,
            WHITE(),
            BLACK(),
            0,
            mod.UIBgFill.None,
            player,
        );
        return;
    }

    const candidates = validSameTeamCandidates(playerTeam);
    if (candidates.length < 2) {
        const waitText = otherTeamNeedsCommanderVote(playerTeam) ? "Waiting for other team vote" : "Vote not required";
        addText(widgetName([rootName, "Wait"]), mod.CreateVector(0, 130, 0), mod.CreateVector(500, 32, 0), root, message(waitText), 20, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
        return;
    }

    const voterId = mod.GetObjId(player);
    const votedCandidateId = teamState.votesByVoterId.get(voterId);
    const votedCandidate = votedCandidateId === undefined ? undefined : candidateById(teamState, votedCandidateId);
    const voteStatus = votedCandidate === undefined ? message("Not voted") : message("Voted: {}", votedCandidate);
    addText(widgetName([rootName, "VoteStatus"]), mod.CreateVector(0, 96, 0), mod.CreateVector(500, 28, 0), root, voteStatus, 18, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);

    for (let i = 0; i < candidates.length; i += 1) {
        const candidate = candidates[i];
        createCommanderElectionButton(
            commanderElectionVoteButtonName(player, candidate),
            mod.CreateVector(0, 142 + i * 48, 0),
            mod.CreateVector(420, 38, 0),
            root,
            message("投票: {}", candidate),
            player,
        );
    }
}

function syncCommanderElectionUiForAll(): void {
    for (const player of allHumanPlayers()) {
        syncCommanderElectionUi(player);
    }
}

function removeCommanderElectionUiForAll(): void {
    for (const player of allHumanPlayers()) {
        destroyCommanderElectionUi(player);
    }
}

function handleCommanderElectionCandidateButton(player: mod.Player): void {
    if (commanderElection.phase !== "candidacy") return;
    if (!isHumanPlayer(player)) return;
    if (!isPlayerAlive(player)) return;
    const teamState = teamElectionState(mod.GetTeam(player));
    if (teamState === undefined) return;
    if (isCandidateForTeam(player, teamState)) return;
    if (teamState.candidates.length >= COMMANDER_ELECTION_MAX_CANDIDATES) return;
    teamState.candidates.push(player);
    syncCommanderElectionUiForAll();
}

function handleCommanderElectionVoteButton(player: mod.Player, buttonName: string): void {
    if (commanderElection.phase !== "voting") return;
    if (!isHumanPlayer(player)) return;
    if (!isPlayerAlive(player)) return;
    const teamState = teamElectionState(mod.GetTeam(player));
    if (teamState === undefined) return;
    const candidates = validSameTeamCandidates(mod.GetTeam(player));
    for (const candidate of candidates) {
        if (buttonName !== commanderElectionVoteButtonName(player, candidate)) continue;
        teamState.votesByVoterId.set(mod.GetObjId(player), mod.GetObjId(candidate));
        syncCommanderElectionUi(player);
        return;
    }
}

function resetCommanderElectionState(): void {
    commanderElection.phase = "idle";
    commanderElection.countdownRemaining = 0;
    commanderElection.team1.candidates = [];
    commanderElection.team1.votesByVoterId.clear();
    commanderElection.team2.candidates = [];
    commanderElection.team2.votesByVoterId.clear();
    commanderElection.runtimeTeam1 = { succession: [], vacant: true };
    commanderElection.runtimeTeam2 = { succession: [], vacant: true };
    commanderElection.gameplayStarted = false;
    commanderInitialCooldownByPlayerId.clear();
    commanderElectionAiInputBatchPlayerIndex = 0;
    commanderElectionAiInputBatchInputIndex = 0;
    removeCommanderResultUiForAll();
}

function scoreCandidate(teamState: TeamElectionState, candidate: mod.Player): number {
    const candidateId = mod.GetObjId(candidate);
    let score = 0;
    for (const votedCandidateId of Array.from(teamState.votesByVoterId.values())) {
        if (votedCandidateId === candidateId) score += 1;
    }
    return score;
}

function finalizeCommanderForTeam(teamValue: mod.Team): void {
    const teamState = teamElectionState(teamValue);
    const runtime = teamCommanderRuntime(teamValue);
    if (teamState === undefined || runtime === undefined) return;

    const candidates = validSameTeamCandidates(teamValue);
    if (candidates.length === 0) {
        runtime.commander = undefined;
        runtime.succession = [];
        runtime.vacant = true;
        return;
    }

    const ranked = candidates.slice().sort((left, right) => {
        const scoreDelta = scoreCandidate(teamState, right) - scoreCandidate(teamState, left);
        if (scoreDelta !== 0) return scoreDelta;
        return candidateOrder(teamState, mod.GetObjId(left)) - candidateOrder(teamState, mod.GetObjId(right));
    });
    runtime.commander = ranked[0];
    runtime.succession = ranked.slice(1);
    runtime.vacant = false;
}

function isCommanderPlayer(player: mod.Player): boolean {
    const runtime = teamCommanderRuntime(mod.GetTeam(player));
    if (runtime === undefined || runtime.commander === undefined) return false;
    return mod.GetObjId(runtime.commander) === mod.GetObjId(player);
}

function promoteCommanderIfNeeded(teamValue: mod.Team): void {
    const runtime = teamCommanderRuntime(teamValue);
    if (runtime === undefined) return;
    if (runtime.commander !== undefined && mod.IsPlayerValid(runtime.commander) && mod.Equals(mod.GetTeam(runtime.commander), teamValue)) return;
    if (runtime.commander !== undefined && mod.IsPlayerValid(runtime.commander)) {
        clearCommanderInitialCooldownForPlayerId(mod.GetObjId(runtime.commander));
    }

    while (runtime.succession.length > 0) {
        const nextCommander = runtime.succession.shift();
        if (nextCommander !== undefined && mod.IsPlayerValid(nextCommander) && mod.Equals(mod.GetTeam(nextCommander), teamValue)) {
            runtime.commander = nextCommander;
            runtime.vacant = false;
            return;
        }
    }

    runtime.commander = undefined;
    runtime.vacant = true;
}

function commanderResultRootName(): string {
    return "CommanderResult_TopHud";
}

function commanderResultRootNameForPlayer(player: mod.Player): string {
    return widgetName([commanderResultRootName(), mod.GetObjId(player)]);
}

function removeLegacyCommanderResultUi(): void {
    if (mod.HasUIWidgetWithName("CommanderResult_LeftTop")) mod.DeleteUIWidget(find("CommanderResult_LeftTop"));
}

function commanderResultMessage(runtime: CommanderRuntime | undefined, friendly: boolean): mod.Message {
    if (runtime !== undefined && runtime.commander !== undefined && !runtime.vacant) {
        return friendly ? message("CMD: {}", runtime.commander) : message("E-CMD: {}", runtime.commander);
    }
    return friendly ? message("CMD: NONE") : message("E-CMD: NONE");
}

function syncCommanderResultUiForPlayer(player: mod.Player): void {
    removeLegacyCommanderResultUi();
    if (!mod.IsPlayerValid(player) || !isHumanPlayer(player)) return;
    const rootName = commanderResultRootNameForPlayer(player);
    if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));
    if (commanderElection.phase !== "complete") return;

    mod.AddUIContainer(rootName, mod.CreateVector(0, 0, 0), mod.CreateVector(1000, 140, 0), mod.UIAnchor.TopCenter, player);
    const root = find(rootName);
    mod.SetUIWidgetBgFill(root, mod.UIBgFill.None);
    mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);

    const playerTeamId = teamId(mod.GetTeam(player));
    const friendlyRuntime = playerTeamId === TEAM_2_ID ? commanderElection.runtimeTeam2 : commanderElection.runtimeTeam1;
    const enemyRuntime = playerTeamId === TEAM_2_ID ? commanderElection.runtimeTeam1 : commanderElection.runtimeTeam2;
    const friendlyTextColor = playerTeamId === TEAM_2_ID ? TEAM_2_TEXT() : TEAM_1_TEXT();
    const enemyTextColor = playerTeamId === TEAM_2_ID ? TEAM_1_TEXT() : TEAM_2_TEXT();

    addText(widgetName([rootName, "Friendly"]), mod.CreateVector(-365, 82, 0), mod.CreateVector(210, 22, 0), root, commanderResultMessage(friendlyRuntime, true), 14, friendlyTextColor, BLACK(), 0.28, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "Enemy"]), mod.CreateVector(365, 82, 0), mod.CreateVector(210, 22, 0), root, commanderResultMessage(enemyRuntime, false), 14, enemyTextColor, BLACK(), 0.28, mod.UIBgFill.Blur, player);
}

function syncCommanderResultUi(): void {
    removeLegacyCommanderResultUi();
    for (const player of allHumanPlayers()) {
        syncCommanderResultUiForPlayer(player);
    }
}

function syncCommanderResultUiForAll(): void {
    syncCommanderResultUi();
}

function removeCommanderResultUiForAll(): void {
    removeLegacyCommanderResultUi();
    for (const player of allHumanPlayers()) {
        const rootName = commanderResultRootNameForPlayer(player);
        if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));
    }
}

async function hideCommanderResultUiAfterDelay(runId: number): Promise<void> {
    await mod.Wait(5);
    if (commanderElection.runId !== runId || commanderElection.phase !== "complete") return;
    removeCommanderElectionUiForAll();
    syncCommanderResultUi();
}

async function runCommanderElectionCountdown(runId: number, seconds: number): Promise<boolean> {
    for (let remaining = seconds; remaining >= 0; remaining -= 1) {
        if (commanderElection.runId !== runId || !isCommanderElectionActive()) return false;
        commanderElection.countdownRemaining = remaining;
        syncCommanderElectionUiForAll();
        if (remaining > 0) await mod.Wait(1);
    }
    return commanderElection.runId === runId && isCommanderElectionActive();
}

async function startCommanderElection(): Promise<void> {
    resetCommanderElectionState();
    commanderElection.runId += 1;
    const runId = commanderElection.runId;
    commanderElection.phase = "candidacy";
    commanderElection.countdownRemaining = COMMANDER_ELECTION_CANDIDACY_SECONDS;
    mod.PauseGameModeTime(true);
    applyCommanderElectionRestrictionsToAll(true);
    applyCommanderElectionAiFreezeToAll(true);
    applyCommanderElectionAiIdleToAll();
    void runCommanderElectionRestrictionLoop(runId);
    void runCommanderElectionAiFreezeLoop(runId);
    void runCommanderElectionAiInputRestrictionBatchLoop(runId);
    void runCommanderElectionAiIdleLoop(runId);

    if (!(await runCommanderElectionCountdown(runId, COMMANDER_ELECTION_CANDIDACY_SECONDS))) return;
    if (commanderElection.runId !== runId) return;

    commanderElection.phase = "voting";
    commanderElection.countdownRemaining = COMMANDER_ELECTION_VOTING_SECONDS;
    syncCommanderElectionUiForAll();
    if (!(await runCommanderElectionCountdown(runId, COMMANDER_ELECTION_VOTING_SECONDS))) return;

    finalizeCommanderElection(runId);
}

function finalizeCommanderElection(runId: number): void {
    if (commanderElection.runId !== runId) return;
    finalizeCommanderForTeam(team(TEAM_1_ID));
    finalizeCommanderForTeam(team(TEAM_2_ID));
    commanderElection.phase = "complete";
    commanderElection.countdownRemaining = 0;
    clearCommanderElectionFreezeForAll();
    mod.PauseGameModeTime(false);
    syncCommanderResultUiForAll();
    syncCommanderGadgetsForAll();
    startConquestGameplay();
    void hideCommanderResultUiAfterDelay(runId);
}

function removePlayerIdFromCommanderElection(playerId: number): void {
    for (const teamState of [commanderElection.team1, commanderElection.team2]) {
        teamState.candidates = teamState.candidates.filter((candidate) => mod.GetObjId(candidate) !== playerId);
        teamState.votesByVoterId.delete(playerId);
        for (const [voterId, candidateId] of Array.from(teamState.votesByVoterId.entries())) {
            if (candidateId === playerId) teamState.votesByVoterId.delete(voterId);
        }
    }
}

function cleanupCommanderRuntimeForPlayerId(playerId: number): void {
    clearCommanderInitialCooldownForPlayerId(playerId);
    for (const runtime of [commanderElection.runtimeTeam1, commanderElection.runtimeTeam2]) {
        if (runtime.commander !== undefined && mod.GetObjId(runtime.commander) === playerId) runtime.commander = undefined;
        runtime.succession = runtime.succession.filter((candidate) => mod.GetObjId(candidate) !== playerId);
    }
    promoteCommanderIfNeeded(team(TEAM_1_ID));
    promoteCommanderIfNeeded(team(TEAM_2_ID));
    syncCommanderGadgetsForAll();
    syncCommanderResultUi();
}

function isPlayerAlive(player: mod.Player): boolean {
    if (!mod.IsPlayerValid(player)) return false;
    try {
        return mod.GetSoldierState(player, mod.SoldierStateBool.IsAlive);
    } catch (_error) {
        void _error;
        return false;
    }
}

function canApplyCommanderElectionAiFreeze(player: mod.Player): boolean {
    return mod.IsPlayerValid(player) && isAiSoldier(player) && isPlayerAlive(player);
}

function safeHasCommanderFixedHudTestGadget(player: mod.Player): boolean {
    if (!isPlayerAlive(player)) return false;
    try {
        return mod.HasEquipment(player, COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET);
    } catch (_error) {
        void _error;
        return false;
    }
}

function grantCommanderFixedHudTestPortalGadget(player: mod.Player): void {
    if (!isPlayerAlive(player)) return;
    const playerId = mod.GetObjId(player);
    if (safeHasCommanderFixedHudTestGadget(player)) {
        if (commanderPortalGadgetPlayerIds.has(playerId)) return;
        return;
    }
    try {
        mod.AddEquipment(player, COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET, COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET_SLOT);
        commanderPortalGadgetPlayerIds.add(playerId);
    } catch (_error) {
        void _error;
    }
}

function removeCommanderFixedHudTestPortalGadget(player: mod.Player): void {
    if (!isPlayerAlive(player)) return;
    const playerId = mod.GetObjId(player);
    if (!commanderPortalGadgetPlayerIds.has(playerId)) return;
    if (isCommanderPlayer(player)) return;
    if (!safeHasCommanderFixedHudTestGadget(player)) {
        commanderPortalGadgetPlayerIds.delete(playerId);
        return;
    }
    try {
        mod.RemoveEquipment(player, COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET);
        commanderPortalGadgetPlayerIds.delete(playerId);
    } catch (_error) {
        void _error;
    }
}

function syncCommanderGadgetForPlayer(player: mod.Player): void {
    if (!mod.IsPlayerValid(player)) return;
    if (commanderElection.phase === "complete" && isCommanderPlayer(player)) {
        ensureCommanderInitialCooldownForPlayer(player);
        grantCommanderFixedHudTestPortalGadget(player);
        return;
    }
    forceCommanderFixedHudTestCameraOff(player);
    removeCommanderFixedHudTestPortalGadget(player);
}

function syncCommanderGadgetsForAll(): void {
    promoteCommanderIfNeeded(team(TEAM_1_ID));
    promoteCommanderIfNeeded(team(TEAM_2_ID));
    for (const player of allHumanPlayers()) {
        syncCommanderGadgetForPlayer(player);
    }
    syncCommanderResultUi();
}

function commanderFixedHudTestCameraObjectIdForTeam(teamValue: mod.Team): number | undefined {
    const id = teamId(teamValue);
    if (id === TEAM_1_ID) return TEAM_1_COMMANDER_FIXED_HUD_TEST_CAMERA_OBJECT_ID;
    if (id === TEAM_2_ID) return TEAM_2_COMMANDER_FIXED_HUD_TEST_CAMERA_OBJECT_ID;
    return undefined;
}

function commanderFixedHudTestRequestVar(player: mod.Player): mod.Variable {
    return mod.ObjectVariable(player, COMMANDER_FIXED_HUD_TEST_REQUEST_OBJECT_VAR);
}

function setCommanderFixedHudTestRequested(player: mod.Player, requested: boolean): void {
    try {
        mod.SetVariable(commanderFixedHudTestRequestVar(player), requested ? 1 : 0);
    } catch (_error) {
        void _error;
    }
}

function isCommanderFixedHudTestRequested(player: mod.Player): boolean {
    if (commanderFixedHudTestDesiredPlayerIds.has(mod.GetObjId(player))) return true;
    try {
        return mod.GetVariable(commanderFixedHudTestRequestVar(player)) === 1;
    } catch (_error) {
        void _error;
        return false;
    }
}

function setPlayerBuildVersionVisible(player: mod.Player): void {
    const name = playerHudWidget(player, "BuildVersion");
    if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), true);
}

function setCommanderTopViewHelpVisible(player: mod.Player, visible: boolean): void {
    for (const suffix of [
        "CommanderTopViewHelpPanel",
        "CommanderTopViewHelpLineCamera",
        "CommanderTopViewHelpLineHud",
        "CommanderTopViewHelpLineEnd",
    ]) {
        const name = playerHudWidget(player, suffix);
        if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), visible);
    }
}

function setCommanderViewHudVisible(player: mod.Player, visible: boolean): void {
    for (const suffix of [
        "CommanderViewReticleVerticalUpper",
        "CommanderViewReticleVerticalLower",
        "CommanderViewReticleHorizontalLeft",
        "CommanderViewReticleHorizontalRight",
        "CommanderViewReticleCenterULeft",
        "CommanderViewReticleCenterURight",
        "CommanderViewReticleCenterUBottom",
        "CommanderViewReticleCenterBoxTop",
        "CommanderViewReticleTopLeftHorizontal",
        "CommanderViewReticleTopLeftVertical",
        "CommanderViewReticleTopRightHorizontal",
        "CommanderViewReticleTopRightVertical",
        "CommanderViewReticleBottomLeftHorizontal",
        "CommanderViewReticleBottomLeftVertical",
        "CommanderViewReticleBottomRightHorizontal",
        "CommanderViewReticleBottomRightVertical",
        "CommanderViewAltScaleLine",
        "CommanderViewAltTick500",
        "CommanderViewAltTick400",
        "CommanderViewAltTick300",
        "CommanderViewAltTick200",
        "CommanderViewAltTick100",
        "CommanderViewAltTitle",
        "CommanderViewAlt500",
        "CommanderViewAlt400",
        "CommanderViewAlt300",
        "CommanderViewAlt200",
        "CommanderViewAlt100",
        "CommanderViewAltMarkerDot",
        "CommanderViewAltMarkerLine",
        "CommanderViewAltBgTitle",
        "CommanderViewAltBg500",
        "CommanderViewAltBg400",
        "CommanderViewAltBg300",
        "CommanderViewAltBg200",
        "CommanderViewAltBg100",
    ]) {
        const name = playerHudWidget(player, suffix);
        if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), visible);
    }
    setCommanderAbilityStatusHudVisible(player, visible);
}

function commanderAbilityMenuRootName(playerId: number): string {
    return widgetName(["CommanderAbilityMenu", playerId, "Root"]);
}

function commanderAbilityMenuButtonName(playerId: number, index: number): string {
    return widgetName(["CommanderAbilityMenu", playerId, "Button", index]);
}

function clearCommanderAbilityButtonHandlers(playerId: number): void {
    const prefix = widgetName(["CommanderAbilityMenu", playerId]);
    for (const name of Array.from(commanderAbilityButtonHandlers.keys())) {
        if (name.startsWith(prefix)) commanderAbilityButtonHandlers.delete(name);
    }
    for (const name of Array.from(commanderAbilityButtonIndexesByName.keys())) {
        if (name.startsWith(prefix)) commanderAbilityButtonIndexesByName.delete(name);
    }
}

function destroyCommanderAbilityMenuUi(playerId: number): void {
    clearCommanderAbilityButtonHandlers(playerId);
    const rootName = commanderAbilityMenuRootName(playerId);
    if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));
}

function commanderAbilityCooldownSeconds(ability: CommanderAbilityId): number {
    if (ability === "Airstrike") return COMMANDER_AIRSTRIKE_COOLDOWN_SECONDS;
    if (ability === "Artillery") return COMMANDER_ARTILLERY_COOLDOWN_SECONDS;
    if (ability === "SmokeBarrage") return COMMANDER_SMOKE_BARRAGE_COOLDOWN_SECONDS;
    return COMMANDER_UAV_COOLDOWN_SECONDS;
}

function commanderAbilityRuntime(playerId: number, ability: CommanderAbilityId): CommanderAbilityRuntime {
    let playerRuntime = commanderAbilityRuntimeByPlayerId.get(playerId);
    if (playerRuntime === undefined) {
        playerRuntime = new Map<CommanderAbilityId, CommanderAbilityRuntime>();
        commanderAbilityRuntimeByPlayerId.set(playerId, playerRuntime);
    }
    let abilityRuntime = playerRuntime.get(ability);
    if (abilityRuntime === undefined) {
        abilityRuntime = { cooldownUntil: 0, activeUntil: 0, pendingUntil: 0, runId: 0 };
        playerRuntime.set(ability, abilityRuntime);
    }
    return abilityRuntime;
}


function applyCommanderInitialCooldownSeed(playerId: number): void {
    const initialCooldown = commanderInitialCooldownByPlayerId.get(playerId);
    if (initialCooldown === undefined) return;
    const uavRuntime = commanderAbilityRuntime(playerId, "UAV");
    const airstrikeRuntime = commanderAbilityRuntime(playerId, "Airstrike");
    uavRuntime.cooldownUntil = Math.max(uavRuntime.cooldownUntil, initialCooldown.uavUnlockUntil);
    airstrikeRuntime.cooldownUntil = Math.max(airstrikeRuntime.cooldownUntil, initialCooldown.airstrikeUnlockUntil);
}

function ensureCommanderInitialCooldownForPlayer(player: mod.Player): void {
    if (!mod.IsPlayerValid(player) || !isCommanderPlayer(player)) return;
    const playerId = mod.GetObjId(player);
    if (!commanderInitialCooldownByPlayerId.has(playerId)) {
        const now = mod.GetMatchTimeElapsed();
        commanderInitialCooldownByPlayerId.set(playerId, {
            uavUnlockUntil: now + COMMANDER_UAV_COOLDOWN_SECONDS,
            airstrikeUnlockUntil: now + COMMANDER_AIRSTRIKE_COOLDOWN_SECONDS,
        });
    }
    applyCommanderInitialCooldownSeed(playerId);
}

function clearCommanderInitialCooldownForPlayerId(playerId: number): void {
    commanderInitialCooldownByPlayerId.delete(playerId);
}
function isCommanderAbilityOnCooldown(playerId: number, ability: CommanderAbilityId): boolean {
    return commanderAbilityRuntime(playerId, ability).cooldownUntil > mod.GetMatchTimeElapsed();
}

function commanderAbilityCooldownRemaining(playerId: number, ability: CommanderAbilityId): number {
    return Math.max(0, Math.ceil(commanderAbilityRuntime(playerId, ability).cooldownUntil - mod.GetMatchTimeElapsed()));
}

function commanderAbilityEffectRemaining(playerId: number, ability: CommanderAbilityId): number {
    return Math.max(0, Math.ceil(commanderAbilityRuntime(playerId, ability).activeUntil - mod.GetMatchTimeElapsed()));
}

function commanderAbilityPendingRemaining(playerId: number, ability: CommanderAbilityId): number {
    return Math.max(0, Math.ceil(commanderAbilityRuntime(playerId, ability).pendingUntil - mod.GetMatchTimeElapsed()));
}

function commanderAbilityStatusMessage(playerId: number, ability: CommanderAbilityId): mod.Message {
    if (!isCommanderRangePreviewAbility(ability)) return message("not Available");
    const cooldown = commanderAbilityCooldownRemaining(playerId, ability);
    const active = commanderAbilityEffectRemaining(playerId, ability);
    const pending = commanderAbilityPendingRemaining(playerId, ability);
    if (active > 0) return message("CD {}s  ACTIVE {}s", cooldown, active);
    if (pending > 0) return message("CD {}s  PENDING {}s", cooldown, pending);
    if (cooldown > 0) return message("CD {}s", cooldown);
    return message("READY");
}

function commanderAbilityDisplayName(ability: CommanderAbilityId): mod.Message {
    if (ability === "UAV") return message("UAV");
    if (ability === "Airstrike") return message("Precision Airstrike");
    if (ability === "Artillery") return message("Artillery (not Available)");
    if (ability === "SmokeBarrage") return message("Screening Barrage (not Available)");
    return message("");
}

function registerCommanderAbilityDisplayLiterals(): void {
    void message("Airstrike");
    void message("ACTIVE");
}

function commanderAbilityStatusName(player: mod.Player, ability: CommanderAbilityId, suffix: string): string {
    return playerHudWidget(player, widgetName(["CommanderAbilityStatus", ability, suffix]));
}

function updateCommanderAbilityStatusHud(player: mod.Player): void {
    if (!mod.IsPlayerValid(player)) return;
    ensureCommanderInitialCooldownForPlayer(player);
    const playerId = mod.GetObjId(player);
    for (let index = 0; index < 4; index += 1) {
        const ability = COMMANDER_ABILITY_MENU_ENTRIES[index].id;
        if (ability === undefined) continue;
        const titleName = commanderAbilityStatusName(player, ability, "Title");
        const statusName = commanderAbilityStatusName(player, ability, "Status");
        if (mod.HasUIWidgetWithName(titleName)) mod.SetUITextLabel(find(titleName), commanderAbilityDisplayName(ability));
        if (mod.HasUIWidgetWithName(statusName)) mod.SetUITextLabel(find(statusName), commanderAbilityStatusMessage(playerId, ability));
    }
}

function setCommanderAbilityStatusHudVisible(player: mod.Player, visible: boolean): void {
    for (const ability of ["UAV", "Airstrike", "Artillery", "SmokeBarrage"] as CommanderAbilityId[]) {
        for (const suffix of ["Bg", "Title", "Status"]) {
            const name = commanderAbilityStatusName(player, ability, suffix);
            if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), visible);
        }
    }
    if (visible) updateCommanderAbilityStatusHud(player);
}

function createCommanderAbilityStatusHud(player: mod.Player, root: mod.UIWidget): void {
    for (let index = 0; index < 4; index += 1) {
        const ability = COMMANDER_ABILITY_MENU_ENTRIES[index].id;
        if (ability === undefined) continue;
        const top = COMMANDER_ABILITY_STATUS_HUD_Y + index * COMMANDER_ABILITY_STATUS_HUD_ROW_HEIGHT;
        addContainer(
            commanderAbilityStatusName(player, ability, "Bg"),
            mod.CreateVector(COMMANDER_ABILITY_STATUS_HUD_X, top, 0),
            mod.CreateVector(COMMANDER_ABILITY_STATUS_HUD_WIDTH, COMMANDER_ABILITY_STATUS_HUD_ROW_HEIGHT - 6, 0),
            root,
            BLACK(),
            0.62,
            mod.UIBgFill.Blur,
            player,
        );
        addLeftText(
            commanderAbilityStatusName(player, ability, "Title"),
            mod.CreateVector(COMMANDER_ABILITY_STATUS_HUD_X + 7, top + 5, 0),
            mod.CreateVector(COMMANDER_ABILITY_STATUS_HUD_WIDTH - 14, COMMANDER_ABILITY_STATUS_HUD_LINE_HEIGHT, 0),
            root,
            commanderAbilityDisplayName(ability),
            ability === "SmokeBarrage" ? 10 : 12,
            WHITE(),
            BLACK(),
            0,
            mod.UIBgFill.None,
            player,
        );
        addLeftText(
            commanderAbilityStatusName(player, ability, "Status"),
            mod.CreateVector(COMMANDER_ABILITY_STATUS_HUD_X + 7, top + 27, 0),
            mod.CreateVector(COMMANDER_ABILITY_STATUS_HUD_WIDTH - 14, COMMANDER_ABILITY_STATUS_HUD_LINE_HEIGHT, 0),
            root,
            message("READY"),
            11,
            WHITE(),
            BLACK(),
            0,
            mod.UIBgFill.None,
            player,
        );
    }
    setCommanderAbilityStatusHudVisible(player, false);
}

function commanderUiRangeRingRootName(playerId: number): string {
    return widgetName(["CommanderUiRangeRing", playerId, "Root"]);
}

function commanderUiRangeRingDotName(playerId: number, suffix: string, index: number): string {
    return widgetName(["CommanderUiRangeRing", playerId, suffix, index]);
}

function commanderUiRangeRingCenterMarkerName(playerId: number): string {
    return widgetName(["CommanderUiRangeRing", playerId, "Center"]);
}

function commanderUiRangeRingUavColor(): mod.Vector {
    return mod.CreateVector(0.1, 0.72, 1);
}

function commanderUiRangeRingAirColor(): mod.Vector {
    return mod.CreateVector(1, 0.82, 0.08);
}

function commanderUiRangeRingVerticalDistance(cameraState: CommanderCameraMoveState, targetGroundY: number): number {
    return Math.max(1, Math.abs(mod.YComponentOf(cameraState.currentCameraPosition) - targetGroundY));
}

function commanderUiRangeRingPixelsPerMeter(cameraState: CommanderCameraMoveState, targetGroundY: number): number {
    return COMMANDER_UI_RANGE_RING_PROJECTION_FACTOR / commanderUiRangeRingVerticalDistance(cameraState, targetGroundY);
}

function commanderUiRangeRingScreenPosition(cameraState: CommanderCameraMoveState, worldPoint: mod.Vector, targetGroundY: number): mod.Vector {
    const pixelsPerMeter = commanderUiRangeRingPixelsPerMeter(cameraState, targetGroundY);
    const dx = mod.XComponentOf(worldPoint) - mod.XComponentOf(cameraState.currentCameraPosition);
    const dz = mod.ZComponentOf(worldPoint) - mod.ZComponentOf(cameraState.currentCameraPosition);
    return mod.CreateVector(
        COMMANDER_UI_RANGE_RING_SCREEN_CENTER_X + dx * pixelsPerMeter,
        COMMANDER_UI_RANGE_RING_SCREEN_CENTER_Y + dz * pixelsPerMeter,
        0,
    );
}

function commanderUiRangeRingDotOffset(spec: CommanderUiRangeRingSpec, index: number, pixelsPerMeter: number): mod.Vector {
    const angle = (Math.PI * 2 * index) / COMMANDER_UI_RANGE_RING_SEGMENTS;
    return mod.CreateVector(
        Math.cos(angle) * spec.radius * pixelsPerMeter,
        Math.sin(angle) * spec.radius * pixelsPerMeter,
        0,
    );
}

function commanderUiRangeRingDotPosition(state: CommanderUiRangeRingState, spec: CommanderUiRangeRingSpec, index: number, pixelsPerMeter: number): mod.Vector {
    return mod.Add(state.originScreenCenter, commanderUiRangeRingDotOffset(spec, index, pixelsPerMeter));
}

function deleteCommanderUiRangeRingUi(playerId: number): void {
    const rootName = commanderUiRangeRingRootName(playerId);
    try {
        if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));
    } catch (_error) {
        void _error;
    }
}

function cleanupCommanderUiRangeRingForPlayerId(playerId: number, complete = false): void {
    const state = commanderUiRangeRingStatesByPlayerId.get(playerId);
    commanderUiRangeRingStatesByPlayerId.delete(playerId);
    commanderUiRangeRingRunSequence += 1;
    deleteCommanderUiRangeRingUi(playerId);
    if (complete && state !== undefined && mod.IsPlayerValid(state.player) && commanderFixedHudTestActivePlayerIds.has(playerId)) {
}
}

function cleanupCommanderUiRangeRingsForAll(): void {
    for (const playerId of Array.from(commanderUiRangeRingStatesByPlayerId.keys())) {
        cleanupCommanderUiRangeRingForPlayerId(playerId);
    }
}

function createCommanderUiRangeRingUi(player: mod.Player, state: CommanderUiRangeRingState): boolean {
    const playerId = mod.GetObjId(player);
    deleteCommanderUiRangeRingUi(playerId);
    try {
        mod.AddUIContainer(state.rootName, mod.CreateVector(0, 0, 0), mod.CreateVector(10000, 10000, 0), mod.UIAnchor.TopCenter, player);
        const root = find(state.rootName);
        mod.SetUIWidgetBgFill(root, mod.UIBgFill.None);
        mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);
        mod.AddUIContainer(
            state.centerMarkerName,
            state.originScreenCenter,
            mod.CreateVector(COMMANDER_UI_RANGE_RING_CENTER_MARKER_SIZE, COMMANDER_UI_RANGE_RING_CENTER_MARKER_SIZE, 0),
            mod.UIAnchor.TopCenter,
            root,
            true,
            0,
            WHITE(),
            0.95,
            mod.UIBgFill.Solid,
            mod.UIDepth.AboveGameUI,
            player,
        );
        for (const spec of state.specs) {
            for (let index = 0; index < COMMANDER_UI_RANGE_RING_SEGMENTS; index += 1) {
                const dotName = commanderUiRangeRingDotName(playerId, spec.suffix, index);
                mod.AddUIContainer(
                    dotName,
                    commanderUiRangeRingDotPosition(state, spec, index, state.lastPixelsPerMeter),
                    mod.CreateVector(COMMANDER_UI_RANGE_RING_DOT_SIZE, COMMANDER_UI_RANGE_RING_DOT_SIZE, 0),
                    mod.UIAnchor.TopCenter,
                    root,
                    true,
                    0,
                    spec.color,
                    spec.alpha,
                    mod.UIBgFill.Solid,
                    mod.UIDepth.AboveGameUI,
                    player,
                );
            }
        }
return true;
    } catch (_error) {
        void _error;
        deleteCommanderUiRangeRingUi(playerId);
return false;
    }
}

function repositionCommanderUiRangeRingDots(playerId: number, state: CommanderUiRangeRingState, pixelsPerMeter: number): void {
    for (const spec of state.specs) {
        for (let index = 0; index < COMMANDER_UI_RANGE_RING_SEGMENTS; index += 1) {
            const dotName = commanderUiRangeRingDotName(playerId, spec.suffix, index);
            mod.SetUIWidgetPosition(find(dotName), commanderUiRangeRingDotPosition(state, spec, index, pixelsPerMeter));
        }
    }
    state.lastPixelsPerMeter = pixelsPerMeter;
}

function updateCommanderUiRangeRingProjection(player: mod.Player, cameraState: CommanderCameraMoveState): void {
    const playerId = mod.GetObjId(player);
    const state = commanderUiRangeRingStatesByPlayerId.get(playerId);
    if (state === undefined) return;
    if (state.runId !== commanderUiRangeRingStatesByPlayerId.get(playerId)?.runId) return;
    if (!mod.IsPlayerValid(player) || !isPlayerAlive(player) || !isCommanderPlayer(player) || !commanderFixedHudTestActivePlayerIds.has(playerId)) {
        cleanupCommanderUiRangeRingForPlayerId(playerId);
        return;
    }
    if (mod.GetMatchTimeElapsed() >= state.expiresAt) {
        cleanupCommanderUiRangeRingForPlayerId(playerId, true);
        return;
    }
    try {
        const projectedCenter = commanderUiRangeRingScreenPosition(cameraState, state.center, state.targetGroundY);
        const verticalDistance = commanderUiRangeRingVerticalDistance(cameraState, state.targetGroundY);
        const pixelsPerMeter = commanderUiRangeRingPixelsPerMeter(cameraState, state.targetGroundY);
        if (Math.abs(pixelsPerMeter - state.lastPixelsPerMeter) >= 0.01) {
            repositionCommanderUiRangeRingDots(playerId, state, pixelsPerMeter);
            state.lastVerticalDistance = verticalDistance;
        }
        const rootPosition = mod.Subtract(projectedCenter, state.originScreenCenter);
        if (mod.DistanceBetween(rootPosition, state.lastRootPosition) >= 0.25) {
            mod.SetUIWidgetPosition(find(state.rootName), rootPosition);
            state.lastRootPosition = rootPosition;
            state.lastProjectedCenter = projectedCenter;
            if (!state.rootTrackOkLogged) {
                state.rootTrackOkLogged = true;
}
        }
        if (!state.trackOkLogged) {
            state.trackOkLogged = true;
}
    } catch (_error) {
        void _error;
        if (!state.trackFailLogged) {
            state.trackFailLogged = true;
}
        if (!state.rootTrackFailLogged) {
            state.rootTrackFailLogged = true;
}
    }
}

function startCommanderUiRangeRingTest(player: mod.Player, ability: CommanderAbilityId, groundPoint: mod.Vector, durationSeconds: number): void {
    const playerId = mod.GetObjId(player);
    const cameraState = commanderCameraMoveStatesByPlayerId.get(playerId);
    if (cameraState === undefined) {
return;
    }
    const specs: CommanderUiRangeRingSpec[] = [];
    const duration = durationSeconds;
    if (ability === "UAV") {
        specs.push({ radius: COMMANDER_UI_RANGE_RING_UAV_RADIUS_METERS, color: commanderUiRangeRingUavColor(), alpha: 0.86, suffix: "Uav" });
} else if (ability === "Airstrike") {
        specs.push({ radius: COMMANDER_UI_RANGE_RING_AIR_RADIUS_METERS, color: commanderUiRangeRingAirColor(), alpha: 0.9, suffix: "Air" });
} else if (ability === "Artillery") {
        specs.push({ radius: COMMANDER_UI_RANGE_RING_UAV_RADIUS_METERS, color: commanderUiRangeRingUavColor(), alpha: 0.8, suffix: "Uav" });
        specs.push({ radius: COMMANDER_UI_RANGE_RING_AIR_RADIUS_METERS, color: commanderUiRangeRingAirColor(), alpha: 0.9, suffix: "Air" });
} else {
        specs.push({ radius: COMMANDER_UI_RANGE_RING_UAV_RADIUS_METERS, color: commanderUiRangeRingUavColor(), alpha: 0.86, suffix: "Uav" });
}
    cleanupCommanderUiRangeRingForPlayerId(playerId);
    commanderUiRangeRingRunSequence += 1;
    const targetGroundY = mod.YComponentOf(groundPoint);
    const projectedCenter = commanderUiRangeRingScreenPosition(cameraState, groundPoint, targetGroundY);
    const verticalDistance = commanderUiRangeRingVerticalDistance(cameraState, targetGroundY);
    const state = {
        player,
        runId: commanderUiRangeRingRunSequence,
        center: groundPoint,
        targetGroundY,
        expiresAt: mod.GetMatchTimeElapsed() + duration,
        specs,
        rootName: commanderUiRangeRingRootName(playerId),
        centerMarkerName: commanderUiRangeRingCenterMarkerName(playerId),
        originScreenCenter: projectedCenter,
        lastProjectedCenter: projectedCenter,
        lastRootPosition: mod.CreateVector(0, 0, 0),
        lastVerticalDistance: verticalDistance,
        lastPixelsPerMeter: commanderUiRangeRingPixelsPerMeter(cameraState, targetGroundY),
        trackOkLogged: false,
        trackFailLogged: false,
        rootTrackOkLogged: false,
        rootTrackFailLogged: false,
    } satisfies CommanderUiRangeRingState;
    commanderUiRangeRingStatesByPlayerId.set(playerId, state);
    if (!createCommanderUiRangeRingUi(player, state)) {
        commanderUiRangeRingStatesByPlayerId.delete(playerId);
        return;
    }
updateCommanderUiRangeRingProjection(player, cameraState);
}

function commanderAbilityMenuEntryMessage(index: number): mod.Message {
    if (index === 0) return message("UAV");
    if (index === 1) return message("Precision Airstrike");
    if (index === 2) return message("Artillery (not Available)");
    if (index === 3) return message("Screening Barrage (not Available)");
    return message("CANCEL");
}

function commanderAbilityMenuCooldownMessage(ability: CommanderAbilityId, seconds: number): mod.Message {
    if (ability === "UAV") return message("UAV  {}s", seconds);
    if (ability === "Airstrike") return message("Precision Airstrike  {}s", seconds);
    if (ability === "Artillery") return message("Artillery  {}s", seconds);
    return message("Screening Barrage  {}s", seconds);
}

function isCommanderRangePreviewAbility(ability: CommanderAbilityId): boolean {
    return ability === "UAV" || ability === "Airstrike";
}

function setCommanderAbilityMenuUiInputMode(player: mod.Player, enabled: boolean): void {
    if (!mod.IsPlayerValid(player)) return;
    try {
        mod.EnableUIInputMode(enabled, player);
    } catch (_error) {
        void _error;
    }
}

function createCommanderAbilityButton(player: mod.Player, index: number, rowTop: number, root: mod.UIWidget): void {
    const playerId = mod.GetObjId(player);
    const buttonName = commanderAbilityMenuButtonName(playerId, index);
    const containerName = widgetName([buttonName, "Container"]);
    const textName = widgetName([buttonName, "Text"]);
    const entry = COMMANDER_ABILITY_MENU_ENTRIES[index];
    const isAvailable = entry.id === undefined || (isCommanderRangePreviewAbility(entry.id) && !isCommanderAbilityOnCooldown(playerId, entry.id));
    const size = mod.CreateVector(COMMANDER_ABILITY_MENU_WIDTH, COMMANDER_ABILITY_MENU_ROW_HEIGHT, 0);
    mod.AddUIContainer(containerName, mod.CreateVector(COMMANDER_ABILITY_MENU_X, rowTop, 0), size, mod.UIAnchor.TopCenter, root, true, 0, WHITE(), 0, mod.UIBgFill.None, mod.UIDepth.AboveGameUI, player);
    const container = find(containerName, root);
    mod.AddUIButton(
        buttonName,
        mod.CreateVector(0, 0, 0),
        size,
        mod.UIAnchor.TopCenter,
        container,
        true,
        0,
        WHITE(),
        0.72,
        mod.UIBgFill.Blur,
        isAvailable,
        BLACK(),
        0.65,
        mod.CreateVector(0.12, 0.12, 0.12),
        0.45,
        TEAM_1_BG(),
        0.9,
        mod.CreateVector(0.18, 0.18, 0.18),
        0.8,
        TEAM_1_BG(),
        0.75,
        mod.UIDepth.AboveGameUI,
        player,
    );
    const button = find(buttonName, container);
    mod.EnableUIButtonEvent(button, mod.UIButtonEvent.ButtonDown, false);
    mod.EnableUIButtonEvent(button, mod.UIButtonEvent.ButtonUp, true);
    if (entry.id !== undefined && isCommanderRangePreviewAbility(entry.id)) {
        mod.EnableUIButtonEvent(button, mod.UIButtonEvent.HoverIn, true);
        mod.EnableUIButtonEvent(button, mod.UIButtonEvent.HoverOut, true);
    }
    addLeftText(textName, mod.CreateVector(0, 0, 0), mod.CreateVector(COMMANDER_ABILITY_MENU_WIDTH - 28, COMMANDER_ABILITY_MENU_ROW_HEIGHT, 0), container, commanderAbilityMenuEntryMessage(index), 13, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    if (entry.id !== undefined && !isAvailable) {
        mod.SetUITextLabel(find(textName, container), commanderAbilityMenuCooldownMessage(entry.id, commanderAbilityCooldownRemaining(playerId, entry.id)));
        mod.SetUITextColor(find(textName, container), mod.CreateVector(0.65, 0.65, 0.65));
    }
    commanderAbilityButtonHandlers.set(buttonName, (eventPlayer) => handleCommanderAbilityButtonClick(eventPlayer, index));
    commanderAbilityButtonIndexesByName.set(buttonName, index);
}

function renderCommanderAbilityMenu(player: mod.Player): void {
    const playerId = mod.GetObjId(player);
    if (!commanderAbilityMenuStatesByPlayerId.has(playerId)) return;

    destroyCommanderAbilityMenuUi(playerId);
    const rootName = commanderAbilityMenuRootName(playerId);
    mod.AddUIContainer(rootName, mod.CreateVector(0, 0, 0), mod.CreateVector(10000, 10000, 0), mod.UIAnchor.TopCenter, player);
    const root = find(rootName);
    mod.SetUIWidgetBgFill(root, mod.UIBgFill.None);
    mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);

    const panelHeight = COMMANDER_ABILITY_MENU_HEADER_HEIGHT + COMMANDER_ABILITY_MENU_ROW_HEIGHT * COMMANDER_ABILITY_MENU_ENTRIES.length;
    addContainer(widgetName([rootName, "Panel"]), mod.CreateVector(COMMANDER_ABILITY_MENU_X, COMMANDER_ABILITY_MENU_TOP_Y, 0), mod.CreateVector(COMMANDER_ABILITY_MENU_WIDTH, panelHeight, 0), root, BLACK(), 0.78, mod.UIBgFill.Blur, player);
    addContainer(widgetName([rootName, "HeaderBg"]), mod.CreateVector(COMMANDER_ABILITY_MENU_X, COMMANDER_ABILITY_MENU_TOP_Y, 0), mod.CreateVector(COMMANDER_ABILITY_MENU_WIDTH, COMMANDER_ABILITY_MENU_HEADER_HEIGHT, 0), root, BLACK(), 0.9, mod.UIBgFill.Solid, player);
    addLeftText(widgetName([rootName, "HeaderText"]), mod.CreateVector(COMMANDER_ABILITY_MENU_X, COMMANDER_ABILITY_MENU_TOP_Y, 0), mod.CreateVector(COMMANDER_ABILITY_MENU_WIDTH - 28, COMMANDER_ABILITY_MENU_HEADER_HEIGHT, 0), root, message("COMMANDER ABILITY"), 14, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);

    for (let index = 0; index < COMMANDER_ABILITY_MENU_ENTRIES.length; index += 1) {
        const rowTop = COMMANDER_ABILITY_MENU_TOP_Y + COMMANDER_ABILITY_MENU_HEADER_HEIGHT + COMMANDER_ABILITY_MENU_ROW_HEIGHT * index;
        createCommanderAbilityButton(player, index, rowTop, root);
    }
}

function openCommanderAbilityMenu(player: mod.Player): void {
    if (!mod.IsPlayerValid(player) || !isCommanderPlayer(player)) return;
    ensureCommanderInitialCooldownForPlayer(player);
    const playerId = mod.GetObjId(player);
    if (!commanderFixedHudTestActivePlayerIds.has(playerId)) return;
    if (commanderAbilityMenuStatesByPlayerId.has(playerId)) return;
    commanderAbilityMenuStatesByPlayerId.set(playerId, {
        player,
        selectedIndex: 0,
        fireReleasedAfterOpen: false,
    });
    renderCommanderAbilityMenu(player);
    setCommanderAbilityMenuUiInputMode(player, true);
}

function closeCommanderAbilityMenuByPlayerId(playerId: number): void {
    cancelCommanderRangeHoverPreviewByPlayerId(playerId);
    const menuState = commanderAbilityMenuStatesByPlayerId.get(playerId);
    if (menuState !== undefined) setCommanderAbilityMenuUiInputMode(menuState.player, false);
    destroyCommanderAbilityMenuUi(playerId);
    commanderAbilityMenuStatesByPlayerId.delete(playerId);
}

function closeCommanderAbilityMenu(player: mod.Player): void {
    closeCommanderAbilityMenuByPlayerId(mod.GetObjId(player));
}

function cancelCommanderRangeHoverPreviewByPlayerId(playerId: number): void {
    const request = commanderAbilityGroundRequestsByPlayerId.get(playerId);
    if (request !== undefined && request.kind === "hover") commanderAbilityGroundRequestsByPlayerId.delete(playerId);
    const abilityRequest = commanderAbilityRequestsByPlayerId.get(playerId);
    if (abilityRequest !== undefined && abilityRequest.kind === "hover") commanderAbilityRequestsByPlayerId.delete(playerId);
    commanderRangePreviewRequestSequence += 1;
    cleanupCommanderUiRangeRingForPlayerId(playerId);
}

function recordCommanderAbilityRequest(player: mod.Player, ability: CommanderAbilityId, kind: "click" | "hover" = "click"): void {
    const playerId = mod.GetObjId(player);
    const cameraState = commanderCameraMoveStatesByPlayerId.get(playerId);
    if (cameraState === undefined) return;
    if (!isCommanderRangePreviewAbility(ability)) return;
    if (isCommanderAbilityOnCooldown(playerId, ability)) {
        updateCommanderAbilityStatusHud(player);
        return;
    }
    const target = cameraState.currentCameraPosition;
    commanderRangePreviewRequestSequence += 1;
    commanderAbilityRequestSequence = commanderRangePreviewRequestSequence;
    const request = {
        sequence: commanderAbilityRequestSequence,
        commanderPlayerId: playerId,
        ability,
        kind,
        targetX: mod.XComponentOf(target),
        targetZ: mod.ZComponentOf(target),
        groundResolution: "unresolved",
        createdAt: mod.GetMatchTimeElapsed(),
    } satisfies CommanderAbilityRequest;
    commanderAbilityRequestsByPlayerId.set(playerId, request);
    requestCommanderAbilityGroundResolution(player, request);
}

function handleCommanderAbilityButtonClick(player: mod.Player, selectedIndex: number): void {
    if (!isCommanderPlayer(player)) {
        closeCommanderAbilityMenu(player);
        return;
    }
    const playerId = mod.GetObjId(player);
    const menuState = commanderAbilityMenuStatesByPlayerId.get(playerId);
    if (menuState === undefined) return;
    const entry = COMMANDER_ABILITY_MENU_ENTRIES[selectedIndex];
    cancelCommanderRangeHoverPreviewByPlayerId(playerId);
    if (entry.id !== undefined && isCommanderRangePreviewAbility(entry.id)) {
        if (isCommanderAbilityOnCooldown(playerId, entry.id)) {
            updateCommanderAbilityStatusHud(player);
            closeCommanderAbilityMenu(player);
            return;
        }
        recordCommanderAbilityRequest(player, entry.id, "click");
closeCommanderAbilityMenu(player);
        return;
    }
    if (entry.id !== undefined) return;
    closeCommanderAbilityMenu(player);
}

function handleCommanderAbilityButtonHover(player: mod.Player, selectedIndex: number, hovering: boolean): void {
    if (!mod.IsPlayerValid(player) || !isCommanderPlayer(player)) return;
    const playerId = mod.GetObjId(player);
    const menuState = commanderAbilityMenuStatesByPlayerId.get(playerId);
    if (menuState === undefined) return;
    const entry = COMMANDER_ABILITY_MENU_ENTRIES[selectedIndex];
    if (entry.id === undefined || !isCommanderRangePreviewAbility(entry.id)) return;
    if (isCommanderAbilityOnCooldown(playerId, entry.id)) {
        cancelCommanderRangeHoverPreviewByPlayerId(playerId);
        updateCommanderAbilityStatusHud(player);
        return;
    }
    if (!hovering) {
cancelCommanderRangeHoverPreviewByPlayerId(playerId);
        return;
    }
    cancelCommanderRangeHoverPreviewByPlayerId(playerId);
recordCommanderAbilityRequest(player, entry.id, "hover");
}

function requestCommanderAbilityGroundResolution(player: mod.Player, request: CommanderAbilityRequest): void {
    const playerId = mod.GetObjId(player);
    commanderAbilityGroundRequestsByPlayerId.set(playerId, {
        sequence: request.sequence,
        player,
        ability: request.ability,
        kind: request.kind,
        targetX: request.targetX,
        targetZ: request.targetZ,
        createdAt: request.createdAt,
    });
    const start = mod.CreateVector(request.targetX, COMMANDER_GROUND_RAYCAST_START_Y, request.targetZ);
    const stop = mod.CreateVector(request.targetX, COMMANDER_GROUND_RAYCAST_END_Y, request.targetZ);
    try {
        mod.RayCast(player, start, stop);
        void expireCommanderAbilityGroundRequest(playerId, request.sequence);
    } catch (_error) {
        void _error;
        commanderAbilityGroundRequestsByPlayerId.delete(playerId);
        commanderAbilityRequestsByPlayerId.delete(playerId);
    }
}

async function expireCommanderAbilityGroundRequest(playerId: number, sequence: number): Promise<void> {
    await mod.Wait(COMMANDER_GROUND_RAYCAST_TIMEOUT_SECONDS);
    const pending = commanderAbilityGroundRequestsByPlayerId.get(playerId);
    if (pending === undefined || pending.sequence !== sequence) return;
    commanderAbilityGroundRequestsByPlayerId.delete(playerId);
    if (pending.kind === "hover") {
} else {
}
    const request = commanderAbilityRequestsByPlayerId.get(playerId);
    if (request !== undefined && request.sequence === sequence) {
        request.groundResolution = "miss";
        commanderAbilityRequestsByPlayerId.delete(playerId);
    }
}

function handleCommanderAbilityGroundHit(player: mod.Player, point: mod.Vector): void {
    const playerId = mod.GetObjId(player);
    const pending = commanderAbilityGroundRequestsByPlayerId.get(playerId);
    if (pending === undefined) return;
    if (
        Math.abs(mod.XComponentOf(point) - pending.targetX) > 2 ||
        Math.abs(mod.ZComponentOf(point) - pending.targetZ) > 2
    ) {
        return;
    }
    commanderAbilityGroundRequestsByPlayerId.delete(playerId);
    const request = commanderAbilityRequestsByPlayerId.get(playerId);
    if (request === undefined || request.sequence !== pending.sequence) return;
    request.targetY = mod.YComponentOf(point);
    request.groundResolution = "hit";
    commanderAbilityRequestsByPlayerId.delete(playerId);
    if (request.kind === "hover") {
        startCommanderUiRangeRingTest(player, request.ability, point, COMMANDER_UI_RANGE_HOVER_PREVIEW_SECONDS);
return;
    }
activateCommanderAbility(player, request.ability, point);
}

function handleCommanderAbilityGroundMiss(player: mod.Player): void {
    const playerId = mod.GetObjId(player);
    const pending = commanderAbilityGroundRequestsByPlayerId.get(playerId);
    if (pending === undefined) return;
    commanderAbilityGroundRequestsByPlayerId.delete(playerId);
    const request = commanderAbilityRequestsByPlayerId.get(playerId);
    if (request !== undefined && request.sequence === pending.sequence) {
        request.groundResolution = "miss";
        commanderAbilityRequestsByPlayerId.delete(playerId);
    }
    if (pending.kind === "hover") {
} else {
}
}

function activateCommanderAbility(player: mod.Player, ability: CommanderAbilityId, groundPoint: mod.Vector): void {
    if (!mod.IsPlayerValid(player) || !isPlayerAlive(player) || !isCommanderPlayer(player)) return;
    const playerId = mod.GetObjId(player);
    if (!commanderFixedHudTestActivePlayerIds.has(playerId)) return;
    if (!isCommanderRangePreviewAbility(ability)) return;
    const now = mod.GetMatchTimeElapsed();
    const runtime = commanderAbilityRuntime(playerId, ability);
    if (runtime.cooldownUntil > now) {
        updateCommanderAbilityStatusHud(player);
        return;
    }
    if (ability === "Airstrike" && runtime.pendingUntil > now) {
updateCommanderAbilityStatusHud(player);
        return;
    }
    commanderAbilityRunSequence += 1;
    runtime.runId = commanderAbilityRunSequence;
    runtime.activeUntil = 0;
    runtime.pendingUntil = 0;
    runtime.lastGround = groundPoint;
startCommanderUiRangeRingTest(player, ability, groundPoint, COMMANDER_UI_RANGE_CLICK_PREVIEW_SECONDS);
void completeCommanderRangeClickPreviewLater(player, commanderUiRangeRingRunSequence);
    if (ability === "UAV") {
        runtime.cooldownUntil = Math.max(runtime.cooldownUntil, now + COMMANDER_UAV_COOLDOWN_SECONDS);
        runtime.activeUntil = now + COMMANDER_UAV_DURATION_SECONDS;
void runCommanderUav(player, runtime.runId, groundPoint);
        updateCommanderAbilityStatusHud(player);
        return;
    }
    if (ability === "Airstrike") {
        commanderPrecisionAirstrikeDamageStatesByCommanderId.delete(playerId);
        runtime.cooldownUntil = Math.max(runtime.cooldownUntil, now + COMMANDER_AIRSTRIKE_COOLDOWN_SECONDS);
        runtime.pendingUntil = now + COMMANDER_PRECISION_AIRSTRIKE_DELAY_SECONDS;
        void runCommanderPrecisionAirstrike(player, runtime.runId, groundPoint);
        updateCommanderAbilityStatusHud(player);
        return;
    }
    updateCommanderAbilityStatusHud(player);
}

async function completeCommanderRangeClickPreviewLater(player: mod.Player, runId: number): Promise<void> {
    await mod.Wait(COMMANDER_UI_RANGE_CLICK_PREVIEW_SECONDS);
    if (!mod.IsPlayerValid(player)) return;
    const playerId = mod.GetObjId(player);
    const state = commanderUiRangeRingStatesByPlayerId.get(playerId);
    if (state === undefined || state.runId !== runId) return;
    cleanupCommanderUiRangeRingForPlayerId(playerId, true);
}

function isCommanderAbilityRunCurrent(player: mod.Player, ability: CommanderAbilityId, runId: number): boolean {
    if (!mod.IsPlayerValid(player) || !isPlayerAlive(player) || !isCommanderPlayer(player)) return false;
    const playerId = mod.GetObjId(player);
    return commanderAbilityRuntime(playerId, ability).runId === runId;
}

function commanderUavEnemyTargets(commander: mod.Player, groundPoint: mod.Vector): mod.Player[] {
    const result: mod.Player[] = [];
    const spottedPlayerIds = new Set<number>();
    if (!mod.IsPlayerValid(commander)) return result;
    const commanderTeam = mod.GetTeam(commander);
    const players = mod.AllPlayers();
    for (let index = 0; index < countPortalArray(players); index += 1) {
        const target = portalArrayValue<mod.Player>(players, index);
        if (!mod.IsPlayerValid(target) || !isPlayerAlive(target)) continue;
        if (mod.Equals(mod.GetTeam(target), commanderTeam)) continue;
        try {
            const position = mod.GetSoldierState(target, mod.SoldierStateVector.GetPosition);
            const planarPosition = mod.CreateVector(
                mod.XComponentOf(position),
                mod.YComponentOf(groundPoint),
                mod.ZComponentOf(position),
            );
            if (mod.DistanceBetween(planarPosition, groundPoint) <= COMMANDER_UAV_RADIUS_METERS) {
                result.push(target);
                spottedPlayerIds.add(mod.GetObjId(target));
            }
        } catch (_error) {
            void _error;
        }
    }
    const vehicles = mod.AllVehicles();
    for (let index = 0; index < countPortalArray(vehicles); index += 1) {
        const vehicle = portalArrayValue<mod.Vehicle>(vehicles, index);
        try {
            if (!mod.IsVehicleOccupied(vehicle)) continue;
            if (mod.Equals(mod.GetVehicleTeam(vehicle), commanderTeam)) continue;
            const position = mod.GetVehicleState(vehicle, mod.VehicleStateVector.VehiclePosition);
            const planarPosition = mod.CreateVector(
                mod.XComponentOf(position),
                mod.YComponentOf(groundPoint),
                mod.ZComponentOf(position),
            );
            if (mod.DistanceBetween(planarPosition, groundPoint) > COMMANDER_UAV_RADIUS_METERS) continue;
            const occupants = mod.GetAllPlayersInVehicle(vehicle);
            for (let occupantIndex = 0; occupantIndex < countPortalArray(occupants); occupantIndex += 1) {
                const occupant = portalArrayValue<mod.Player>(occupants, occupantIndex);
                if (!mod.IsPlayerValid(occupant)) continue;
                if (mod.Equals(mod.GetTeam(occupant), commanderTeam)) continue;
                const occupantId = mod.GetObjId(occupant);
                if (spottedPlayerIds.has(occupantId)) continue;
                result.push(occupant);
                spottedPlayerIds.add(occupantId);
            }
        } catch (_error) {
            void _error;
        }
    }
    return result;
}

function applyCommanderUavSpot(commander: mod.Player, groundPoint: mod.Vector): void {
    for (const target of commanderUavEnemyTargets(commander, groundPoint)) {
        try {
            mod.SpotTarget(target, COMMANDER_UAV_SPOT_DURATION_SECONDS, mod.SpotStatus.SpotInBoth);
        } catch (_error) {
            void _error;
        }
    }
}

async function runCommanderUav(player: mod.Player, runId: number, groundPoint: mod.Vector): Promise<void> {
while (isCommanderAbilityRunCurrent(player, "UAV", runId)) {
        const runtime = commanderAbilityRuntime(mod.GetObjId(player), "UAV");
        if (runtime.activeUntil <= mod.GetMatchTimeElapsed()) break;
        applyCommanderUavSpot(player, groundPoint);
        updateCommanderAbilityStatusHud(player);
        await mod.Wait(COMMANDER_UAV_SPOT_INTERVAL_SECONDS);
    }
    if (isCommanderAbilityRunCurrent(player, "UAV", runId)) {
        const runtime = commanderAbilityRuntime(mod.GetObjId(player), "UAV");
        runtime.activeUntil = 0;
    }
updateCommanderAbilityStatusHud(player);
}

function commanderPrecisionAirstrikeImpactPosition(groundPoint: mod.Vector, impactIndex: number): mod.Vector {
    const offset = COMMANDER_PRECISION_AIRSTRIKE_IMPACT_OFFSET_METERS;
    const offsets = [
        mod.CreateVector(0, 0, 0),
        mod.CreateVector(-offset, 0, 0),
        mod.CreateVector(offset, 0, 0),
        mod.CreateVector(0, 0, -offset),
        mod.CreateVector(0, 0, offset),
    ];
    const selected = offsets[impactIndex] ?? offsets[0];
    return mod.CreateVector(
        mod.XComponentOf(groundPoint) + mod.XComponentOf(selected),
        mod.YComponentOf(groundPoint) + COMMANDER_MAP_VFX_GROUND_Y_OFFSET,
        mod.ZComponentOf(groundPoint) + mod.ZComponentOf(selected),
    );
}

function getCommanderPrecisionAirstrikeMapVfx(vfxId: number): mod.VFX | undefined {
    try {
        return mod.GetVFX(vfxId);
    } catch (_error) {
        void _error;
        return undefined;
    }
}

async function triggerCommanderPrecisionAirstrikeImpactVfx(vfxId: number, position: mod.Vector): Promise<boolean> {
    const vfx = getCommanderPrecisionAirstrikeMapVfx(vfxId);
    if (vfx === undefined) return false;
    commanderMapVfxTokenSequence += 1;
    const token = commanderMapVfxTokenSequence;
    commanderMapVfxTokensById.set(vfxId, token);
    try {
        mod.EnableVFX(vfx, false);
        mod.MoveVFX(vfx, position, mod.CreateVector(0, 0, 0));
        await mod.Wait(COMMANDER_MAP_VFX_RETRIGGER_SECONDS);
        if (commanderMapVfxTokensById.get(vfxId) !== token) return false;
        mod.EnableVFX(vfx, true);
        void disableCommanderPrecisionAirstrikeImpactVfxLater(vfxId, token);
        return true;
    } catch (_error) {
        void _error;
        return false;
    }
}

async function disableCommanderPrecisionAirstrikeImpactVfxLater(vfxId: number, token: number): Promise<void> {
    await mod.Wait(COMMANDER_MAP_VFX_VISIBLE_SECONDS);
    if (commanderMapVfxTokensById.get(vfxId) !== token) return;
    const vfx = getCommanderPrecisionAirstrikeMapVfx(vfxId);
    if (vfx === undefined) return;
    try {
        mod.EnableVFX(vfx, false);
    } catch (_error) {
        void _error;
    }
}

function commanderPrecisionAirstrikeEnemyTargets(commander: mod.Player, groundPoint: mod.Vector): mod.Player[] {
    const result: mod.Player[] = [];
    if (!mod.IsPlayerValid(commander)) return result;
    const commanderTeam = mod.GetTeam(commander);
    const players = mod.AllPlayers();
    for (let index = 0; index < countPortalArray(players); index += 1) {
        const target = portalArrayValue<mod.Player>(players, index);
        if (!mod.IsPlayerValid(target) || !isPlayerAlive(target)) continue;
        if (mod.Equals(mod.GetTeam(target), commanderTeam)) continue;
        try {
            const position = mod.GetSoldierState(target, mod.SoldierStateVector.GetPosition);
            const planarPosition = mod.CreateVector(
                mod.XComponentOf(position),
                mod.YComponentOf(groundPoint),
                mod.ZComponentOf(position),
            );
            if (mod.DistanceBetween(planarPosition, groundPoint) <= COMMANDER_AIRSTRIKE_RADIUS_METERS) result.push(target);
        } catch (_error) {
            void _error;
        }
    }
    return result;
}

function commanderPrecisionAirstrikeTargetHealth(target: mod.Player): number {
    if (!mod.IsPlayerValid(target)) return -1;
    try {
        return mod.GetSoldierState(target, mod.SoldierStateNumber.CurrentHealth);
    } catch (_error) {
        void _error;
        return -1;
    }
}

function dealCommanderPrecisionAirstrikeDamage(
    commander: mod.Player,
    runId: number,
    targets: mod.Player[],
): CommanderPrecisionAirstrikeDamageState {
    const state: CommanderPrecisionAirstrikeDamageState = {
        commander,
        runId,
        targets: [],
        targetIds: new Set<number>(),
        healthBeforeByTargetId: new Map<number, number>(),
        killCreditConfirmed: false,
    };
    commanderPrecisionAirstrikeDamageStatesByCommanderId.set(mod.GetObjId(commander), state);
    for (const target of targets) {
        if (!mod.IsPlayerValid(target) || !isPlayerAlive(target)) continue;
        let targetId = -1;
        try {
            targetId = mod.GetObjId(target);
            state.healthBeforeByTargetId.set(targetId, commanderPrecisionAirstrikeTargetHealth(target));
            state.targets.push(target);
            state.targetIds.add(targetId);
            mod.DealDamage(target, COMMANDER_AIRSTRIKE_DAMAGE_AMOUNT, commander);
        } catch (_error) {
            void _error;
            if (targetId >= 0) {
                state.targetIds.delete(targetId);
                state.healthBeforeByTargetId.delete(targetId);
                const targetIndex = state.targets.indexOf(target);
                if (targetIndex >= 0) state.targets.splice(targetIndex, 1);
            }
        }
    }
    return state;
}

function recordCommanderPrecisionAirstrikeKillCredit(killer: mod.Player, victim: mod.Player): void {
    if (!mod.IsPlayerValid(killer) || !mod.IsPlayerValid(victim)) return;
    const commanderId = mod.GetObjId(killer);
    const damageState = commanderPrecisionAirstrikeDamageStatesByCommanderId.get(commanderId);
    if (damageState === undefined || !damageState.targetIds.has(mod.GetObjId(victim))) return;
    damageState.killCreditConfirmed = true;
    if (isCommanderAbilityRunCurrent(killer, "Airstrike", damageState.runId)) {
}
}

async function runCommanderPrecisionAirstrike(player: mod.Player, runId: number, groundPoint: mod.Vector): Promise<void> {
await mod.Wait(COMMANDER_PRECISION_AIRSTRIKE_DELAY_SECONDS);
    if (!isCommanderAbilityRunCurrent(player, "Airstrike", runId)) return;
    let damageState: CommanderPrecisionAirstrikeDamageState | undefined = undefined;
    for (let impactIndex = 0; impactIndex < COMMANDER_PRECISION_AIRSTRIKE_IMPACT_VFX_IDS.length; impactIndex += 1) {
        if (!isCommanderAbilityRunCurrent(player, "Airstrike", runId)) return;
        const vfxId = COMMANDER_PRECISION_AIRSTRIKE_IMPACT_VFX_IDS[impactIndex];
        const impactPoint = commanderPrecisionAirstrikeImpactPosition(groundPoint, impactIndex);
        const impactOk = await triggerCommanderPrecisionAirstrikeImpactVfx(vfxId, impactPoint);
if (impactIndex === 0) {
            const targets = commanderPrecisionAirstrikeEnemyTargets(player, groundPoint);
damageState = dealCommanderPrecisionAirstrikeDamage(player, runId, targets);
}
        if (impactIndex + 1 < COMMANDER_PRECISION_AIRSTRIKE_IMPACT_VFX_IDS.length) {
            await mod.Wait(COMMANDER_PRECISION_AIRSTRIKE_IMPACT_INTERVAL_SECONDS);
        }
    }
    if (!isCommanderAbilityRunCurrent(player, "Airstrike", runId)) return;
    await mod.Wait(COMMANDER_PRECISION_AIRSTRIKE_KILL_CHECK_SECONDS);
    if (!isCommanderAbilityRunCurrent(player, "Airstrike", runId)) return;
await mod.Wait(COMMANDER_PRECISION_AIRSTRIKE_CREDIT_CHECK_SECONDS);
    if (!isCommanderAbilityRunCurrent(player, "Airstrike", runId)) return;
const runtime = commanderAbilityRuntime(mod.GetObjId(player), "Airstrike");
    if (runtime.runId === runId) runtime.pendingUntil = 0;
updateCommanderAbilityStatusHud(player);
}

function cleanupCommanderAbilityStateForPlayerId(playerId: number): void {
    cleanupCommanderUiRangeRingForPlayerId(playerId);
    commanderAbilityRequestsByPlayerId.delete(playerId);
    commanderAbilityGroundRequestsByPlayerId.delete(playerId);
    commanderPrecisionAirstrikeDamageStatesByCommanderId.delete(playerId);
    const runtimes = commanderAbilityRuntimeByPlayerId.get(playerId);
    if (runtimes !== undefined) {
        for (const runtime of Array.from(runtimes.values())) {
            commanderAbilityRunSequence += 1;
            runtime.runId = commanderAbilityRunSequence;
            runtime.activeUntil = 0;
            runtime.pendingUntil = 0;
            runtime.cooldownUntil = 0;
        }
    }
    commanderAbilityRuntimeByPlayerId.delete(playerId);
}

function cleanupCommanderAbilityObjects(): void {
    cleanupCommanderUiRangeRingsForAll();
    commanderPrecisionAirstrikeDamageStatesByCommanderId.clear();
    for (const vfxId of COMMANDER_PRECISION_AIRSTRIKE_IMPACT_VFX_IDS) {
        commanderMapVfxTokenSequence += 1;
        commanderMapVfxTokensById.set(vfxId, commanderMapVfxTokenSequence);
        const vfx = getCommanderPrecisionAirstrikeMapVfx(vfxId);
        if (vfx === undefined) continue;
        try {
            mod.EnableVFX(vfx, false);
        } catch (_error) {
            void _error;
        }
    }
}
function updateCommanderViewAltitudeHud(player: mod.Player, cameraState: CommanderCameraMoveState): void {
    const markerDotName = playerHudWidget(player, "CommanderViewAltMarkerDot");
    const markerLineName = playerHudWidget(player, "CommanderViewAltMarkerLine");
    if (!mod.HasUIWidgetWithName(markerDotName) || !mod.HasUIWidgetWithName(markerLineName)) return;

    const initialHeight = mod.YComponentOf(cameraState.initialCameraPosition);
    const currentHeight = mod.YComponentOf(cameraState.currentCameraPosition);
    const currentDelta = Math.max(
        COMMANDER_CAMERA_HEIGHT_MIN_DELTA,
        Math.min(COMMANDER_CAMERA_HEIGHT_MAX_DELTA, currentHeight - initialHeight),
    );
    const normalizedFromTop = (COMMANDER_CAMERA_HEIGHT_MAX_DELTA - currentDelta) / (COMMANDER_CAMERA_HEIGHT_MAX_DELTA - COMMANDER_CAMERA_HEIGHT_MIN_DELTA);
    const markerY = COMMANDER_VIEW_ALT_SCALE_TOP_Y + normalizedFromTop * (COMMANDER_VIEW_ALT_SCALE_STEP_Y * 4);
    mod.SetUIWidgetPosition(find(markerDotName), mod.CreateVector(COMMANDER_VIEW_ALT_MARKER_X, markerY - 5, 0));
    mod.SetUIWidgetPosition(find(markerLineName), mod.CreateVector(342, markerY - 1, 0));
}

function setCommanderCameraMovePlayerControls(player: mod.Player, cameraActive: boolean): void {
    try {
        mod.SetPlayerMovementSpeedMultiplier(player, cameraActive ? COMMANDER_CAMERA_PLAYER_SPEED_MULTIPLIER : 1);
    } catch (_error) {
        void _error;
    }
    try {
        mod.EnableInputRestriction(player, mod.RestrictedInputs.CameraYaw, cameraActive);
    } catch (_error) {
        void _error;
    }
    try {
        mod.EnableInputRestriction(player, mod.RestrictedInputs.CameraPitch, cameraActive);
    } catch (_error) {
        void _error;
    }
}

function restoreCommanderCameraMovePlayerTransform(cameraState: CommanderCameraMoveState): void {
    const player = cameraState.player;
    if (!mod.IsPlayerValid(player)) return;
    try {
        mod.Teleport(player, cameraState.commanderStartPosition, cameraState.commanderStartYaw);
    } catch (_error) {
        void _error;
    }
    try {
        mod.SetObjectTransform(player, cameraState.commanderStartTransform);
    } catch (_error) {
        void _error;
    }
    try {
        mod.SetObjectTransform(player, mod.CreateTransform(cameraState.commanderStartPosition, cameraState.commanderStartRotation));
    } catch (_error) {
        void _error;
    }
}

function startCommanderCameraMove(player: mod.Player, cameraObjectId: number): void {
    if (!isPlayerAlive(player)) return;
    const playerId = mod.GetObjId(player);
    stopCommanderCameraMoveForPlayerId(playerId, false);
    try {
        const camera = mod.GetFixedCamera(cameraObjectId);
        const initialCameraTransform = mod.GetObjectTransform(camera);
        const initialCameraPosition = mod.GetTransformPosition(initialCameraTransform);
        const commanderStartTransform = mod.GetObjectTransform(player);
        const commanderStartPosition = mod.GetObjectPosition(player);
        const commanderStartRotation = mod.GetObjectRotation(player);
        commanderCameraMoveLoopRunId += 1;
        const loopRunId = commanderCameraMoveLoopRunId;
        commanderCameraMoveStatesByPlayerId.set(playerId, {
            player,
            cameraObjectId,
            initialCameraTransform,
            initialCameraPosition,
            currentCameraPosition: initialCameraPosition,
            appliedCameraPosition: initialCameraPosition,
            smoothedPanVelocity: mod.CreateVector(0, 0, 0),
            lastMoveTickTime: mod.GetMatchTimeElapsed(),
            commanderStartTransform,
            commanderStartPosition,
            commanderStartRotation,
            commanderStartYaw: mod.YComponentOf(commanderStartRotation),
            bodyLockActiveLogged: false,
            bodyLockFailLogged: false,
            lastHeightInputTime: -999,
            loopRunId,
        });
        setCommanderCameraMovePlayerControls(player, true);
        updateCommanderViewAltitudeHud(player, commanderCameraMoveStatesByPlayerId.get(playerId)!);
        try {
} catch (_bodyLockReadyLogError) {
            void _bodyLockReadyLogError;
        }
        void runCommanderCameraMoveLoop(playerId, loopRunId);
    } catch (_error) {
        void _error;
    }
}

function stopCommanderCameraMove(player: mod.Player, restoreCameraAndPlayer = true): void {
    if (!mod.IsPlayerValid(player)) return;
    stopCommanderCameraMoveForPlayerId(mod.GetObjId(player), restoreCameraAndPlayer);
}

function stopCommanderCameraMoveForPlayerId(playerId: number, restoreCameraAndPlayer = true): void {
    const cameraState = commanderCameraMoveStatesByPlayerId.get(playerId);
    commanderCameraMoveStatesByPlayerId.delete(playerId);
    if (cameraState === undefined) return;
    const player = cameraState.player;
    if (mod.IsPlayerValid(player)) setCommanderCameraMovePlayerControls(player, false);
    if (!restoreCameraAndPlayer) return;
    try {
        const camera = mod.GetFixedCamera(cameraState.cameraObjectId);
        mod.StopActiveMovementForObject(camera);
        mod.SetObjectTransform(camera, cameraState.initialCameraTransform);
    } catch (_error) {
        void _error;
    }
    restoreCommanderCameraMovePlayerTransform(cameraState);
}

function stopCommanderCameraMoveForAll(): void {
    for (const playerId of Array.from(commanderCameraMoveStatesByPlayerId.keys())) {
        stopCommanderCameraMoveForPlayerId(playerId);
    }
    commanderCameraMoveStatesByPlayerId.clear();
}

async function runCommanderCameraMoveLoop(playerId: number, loopRunId: number): Promise<void> {
    while (commanderCameraMoveStatesByPlayerId.get(playerId)?.loopRunId === loopRunId) {
        await mod.Wait(COMMANDER_CAMERA_MOVE_TICK_SECONDS);
        const cameraState = commanderCameraMoveStatesByPlayerId.get(playerId);
        if (cameraState === undefined || cameraState.loopRunId !== loopRunId) return;
        const player = cameraState.player;
        if (!mod.IsPlayerValid(player) || !isPlayerAlive(player) || !isCommanderPlayer(player) || !commanderFixedHudTestActivePlayerIds.has(playerId)) {
            stopCommanderCameraMoveForPlayerId(playerId);
            return;
        }

        let heightMoveRequested = false;
        try {
            const heightDelta = handleCommanderCameraHeightWeaponInput(player, cameraState);
            updateCommanderAbilityStatusHud(player);
            const velocity = mod.GetSoldierState(player, mod.SoldierStateVector.GetLinearVelocity);
            const moveTickTime = mod.GetMatchTimeElapsed();
            let moveDeltaSeconds = moveTickTime - cameraState.lastMoveTickTime;
            cameraState.lastMoveTickTime = moveTickTime;
            if (moveDeltaSeconds <= 0 || moveDeltaSeconds > COMMANDER_CAMERA_MOVE_MAX_DELTA_SECONDS) {
                moveDeltaSeconds = COMMANDER_CAMERA_MOVE_TICK_SECONDS;
            }
            const moveDelta = commanderCameraPanDeltaFromPlayerVelocity(player, velocity, cameraState, moveDeltaSeconds);
            let bodyLockApplied = false;
            try {
                mod.SetObjectTransform(player, cameraState.commanderStartTransform);
                bodyLockApplied = true;
            } catch (_bodyLockError) {
                void _bodyLockError;
            }
            if (bodyLockApplied && !cameraState.bodyLockActiveLogged) {
                cameraState.bodyLockActiveLogged = true;
                try {
} catch (_bodyLockActiveLogError) {
                    void _bodyLockActiveLogError;
                }
            }
            if (!bodyLockApplied && !cameraState.bodyLockFailLogged) {
                cameraState.bodyLockFailLogged = true;
                try {
} catch (_bodyLockFailLogError) {
                    void _bodyLockFailLogError;
                }
            }
            const currentHeight = mod.YComponentOf(cameraState.currentCameraPosition);
            const nextPlanarPosition = mod.Add(cameraState.currentCameraPosition, moveDelta);
            const nextHeight = commanderCameraClampedHeight(cameraState, heightDelta);
            heightMoveRequested = Math.abs(nextHeight - currentHeight) >= COMMANDER_CAMERA_MIN_MOVE_DELTA;
            const nextCameraPosition = mod.CreateVector(
                mod.XComponentOf(nextPlanarPosition),
                nextHeight,
                mod.ZComponentOf(nextPlanarPosition),
            );
            if (mod.DistanceBetween(nextCameraPosition, cameraState.appliedCameraPosition) >= COMMANDER_CAMERA_MIN_MOVE_DELTA) {
                mod.MoveObject(mod.GetFixedCamera(cameraState.cameraObjectId), mod.Subtract(nextCameraPosition, cameraState.appliedCameraPosition));
                cameraState.currentCameraPosition = nextCameraPosition;
                cameraState.appliedCameraPosition = nextCameraPosition;
                updateCommanderViewAltitudeHud(player, cameraState);
                if (heightMoveRequested) {
}
            }
            updateCommanderUiRangeRingProjection(player, cameraState);
        } catch (_error) {
            const cameraState = commanderCameraMoveStatesByPlayerId.get(playerId);
            if (heightMoveRequested && cameraState !== undefined && mod.IsPlayerValid(cameraState.player)) {
}
            void _error;
        }
    }
}

function commanderCameraPanDeltaFromPlayerVelocity(
    player: mod.Player,
    velocity: mod.Vector,
    cameraState: CommanderCameraMoveState,
    deltaSeconds: number,
): mod.Vector {
    const localVelocity = mod.LocalVectorOf(velocity, player);
    const screenPlanarVelocity = mod.CreateVector(mod.XComponentOf(localVelocity), 0, mod.ZComponentOf(localVelocity));
    const zero = mod.CreateVector(0, 0, 0);
    const hasInput = mod.DistanceBetween(screenPlanarVelocity, zero) >= COMMANDER_CAMERA_INPUT_VELOCITY_DEADZONE;
    const desiredPanVelocity = hasInput
        ? mod.Multiply(mod.Normalize(screenPlanarVelocity), COMMANDER_CAMERA_TARGET_PAN_SPEED)
        : zero;
    const responseRate = hasInput ? COMMANDER_CAMERA_PAN_ACCELERATION_RATE : COMMANDER_CAMERA_PAN_DECELERATION_RATE;
    const response = Math.max(0, Math.min(1, deltaSeconds * responseRate));
    let smoothedPanVelocity = mod.Add(
        cameraState.smoothedPanVelocity,
        mod.Multiply(mod.Subtract(desiredPanVelocity, cameraState.smoothedPanVelocity), response),
    );
    if (!hasInput && mod.DistanceBetween(smoothedPanVelocity, zero) < COMMANDER_CAMERA_PAN_STOP_SPEED) {
        smoothedPanVelocity = zero;
    }
    cameraState.smoothedPanVelocity = smoothedPanVelocity;
    return mod.Multiply(smoothedPanVelocity, deltaSeconds * commanderCameraHeightPanScale(cameraState));
}

function commanderCameraHeightPanScale(cameraState: CommanderCameraMoveState): number {
    const initialHeight = mod.YComponentOf(cameraState.initialCameraPosition);
    const currentHeight = mod.YComponentOf(cameraState.currentCameraPosition);
    const relativeAltitude = currentHeight - initialHeight - COMMANDER_CAMERA_HEIGHT_MIN_DELTA;
    if (relativeAltitude < COMMANDER_CAMERA_HEIGHT_STEP) return COMMANDER_CAMERA_ALT_100_PAN_SCALE;
    if (relativeAltitude < COMMANDER_CAMERA_HEIGHT_STEP * 2) return COMMANDER_CAMERA_ALT_200_PAN_SCALE;
    return COMMANDER_CAMERA_ALT_300_PLUS_PAN_SCALE;
}

function handleCommanderCameraHeightWeaponInput(player: mod.Player, cameraState: CommanderCameraMoveState): number {
    const elapsed = mod.GetMatchTimeElapsed();
    if (commanderAbilityMenuStatesByPlayerId.has(mod.GetObjId(player))) return 0;
    if (elapsed - cameraState.lastHeightInputTime < COMMANDER_CAMERA_HEIGHT_INPUT_COOLDOWN_SECONDS) return 0;
    try {
        if (mod.IsInventorySlotActive(player, mod.InventorySlots.PrimaryWeapon)) {
            cameraState.lastHeightInputTime = elapsed;
            mod.ForceSwitchInventory(player, COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET_SLOT);
            return -COMMANDER_CAMERA_HEIGHT_STEP;
        }
        if (mod.IsInventorySlotActive(player, mod.InventorySlots.SecondaryWeapon)) {
            cameraState.lastHeightInputTime = elapsed;
            mod.ForceSwitchInventory(player, COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET_SLOT);
            return COMMANDER_CAMERA_HEIGHT_STEP;
        }
    } catch (_error) {
        void _error;
    }
    return 0;
}

function commanderCameraClampedHeight(cameraState: CommanderCameraMoveState, heightDelta: number): number {
    const initialHeight = mod.YComponentOf(cameraState.initialCameraPosition);
    const currentHeight = mod.YComponentOf(cameraState.currentCameraPosition);
    const requestedHeight = currentHeight + heightDelta;
    return Math.max(initialHeight + COMMANDER_CAMERA_HEIGHT_MIN_DELTA, Math.min(initialHeight + COMMANDER_CAMERA_HEIGHT_MAX_DELTA, requestedHeight));
}

function requestCommanderFixedHudTest(player: mod.Player): void {
    if (!isPlayerAlive(player)) return;
    commanderFixedHudTestDesiredPlayerIds.add(mod.GetObjId(player));
    setCommanderFixedHudTestRequested(player, true);
    applyCommanderFixedHudTestCamera(player);
}

function enableCommanderFixedHudTestCameraOnDeploy(player: mod.Player): void {
    if (!isPlayerAlive(player)) return;
    const playerId = mod.GetObjId(player);
    if (!isCommanderFixedHudTestRequested(player)) return;
    commanderFixedHudTestDesiredPlayerIds.add(playerId);
    applyCommanderFixedHudTestCamera(player);
}

function applyCommanderFixedHudTestCamera(player: mod.Player): void {
    if (!isPlayerAlive(player)) return;
    const cameraObjectId = commanderFixedHudTestCameraObjectIdForTeam(mod.GetTeam(player));
    if (cameraObjectId === undefined) return;
    try {
        mod.SetCameraTypeForPlayer(player, mod.Cameras.Fixed, cameraObjectId);
        commanderFixedHudTestActivePlayerIds.add(mod.GetObjId(player));
        setCommanderTopViewHelpVisible(player, true);
        setCommanderViewHudVisible(player, true);
        startCommanderCameraMove(player, cameraObjectId);
        void reapplyCommanderFixedHudTestCameraAfterDeploy(player, cameraObjectId);
    } catch (_error) {
        void _error;
    }
}

async function reapplyCommanderFixedHudTestCameraAfterDeploy(player: mod.Player, cameraObjectId: number): Promise<void> {
    await mod.Wait(0.1);
    reapplyCommanderFixedHudTestCamera(player, cameraObjectId);
    await mod.Wait(0.9);
    reapplyCommanderFixedHudTestCamera(player, cameraObjectId);
}

function reapplyCommanderFixedHudTestCamera(player: mod.Player, cameraObjectId: number): void {
    if (!mod.IsPlayerValid(player) || !isCommanderFixedHudTestRequested(player)) return;
    try {
        mod.SetCameraTypeForPlayer(player, mod.Cameras.Fixed, cameraObjectId);
        commanderFixedHudTestActivePlayerIds.add(mod.GetObjId(player));
        setCommanderTopViewHelpVisible(player, true);
        setCommanderViewHudVisible(player, true);
        const cameraState = commanderCameraMoveStatesByPlayerId.get(mod.GetObjId(player));
        if (cameraState !== undefined) updateCommanderViewAltitudeHud(player, cameraState);
        if (!commanderCameraMoveStatesByPlayerId.has(mod.GetObjId(player))) startCommanderCameraMove(player, cameraObjectId);
    } catch (_error) {
        void _error;
    }
}

function forceCommanderFixedHudTestCameraOff(player: mod.Player, clearDesired = true): void {
    if (!mod.IsPlayerValid(player)) return;
    const playerId = mod.GetObjId(player);
    closeCommanderAbilityMenuByPlayerId(playerId);
    cleanupCommanderUiRangeRingForPlayerId(playerId);
    if (clearDesired) commanderFixedHudTestDesiredPlayerIds.delete(playerId);
    if (clearDesired) setCommanderFixedHudTestRequested(player, false);
    stopCommanderCameraMove(player);
    commanderFixedHudTestActivePlayerIds.delete(playerId);
    try {
        mod.SetCameraTypeForPlayer(player, mod.Cameras.FirstPerson);
    } catch (_error) {
        void _error;
    }
    setCommanderTopViewHelpVisible(player, false);
    setCommanderViewHudVisible(player, false);
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
    addText("ConquestTimer", mod.CreateVector(0, 50, 0), mod.CreateVector(90, 30, 0), root, timeMessage(), 24, WHITE(), BLACK(), 0.8, mod.UIBgFill.Blur);
    createObjectiveHud(root);
    updateSharedHud();
}

// Creates the team-restricted ticket HUD. Shared timer/objective widgets live in the global HUD.
function createTeamHud(teamValue: mod.Team): void {
    const rootName = scoreRootName(teamValue);
    if (mod.HasUIWidgetWithName(rootName)) mod.DeleteUIWidget(find(rootName));

    mod.AddUIContainer(rootName, mod.CreateVector(0, 0, 0), mod.CreateVector(2000, 2000, 0), mod.UIAnchor.TopCenter, teamValue);
    const root = find(rootName);
    mod.SetUIWidgetBgFill(root, mod.UIBgFill.None);
    mod.SetUIWidgetDepth(root, mod.UIDepth.AboveGameUI);

    addText(
        widgetName(["ConquestScore", teamValue, "Friendly"]),
        mod.CreateVector(-315, 45, 0),
        mod.CreateVector(86, 40, 0),
        root,
        message("{}", getTeamScore(teamValue)),
        32,
        TEAM_1_TEXT(),
        TEAM_1_BG(),
        0.8,
        mod.UIBgFill.Blur,
        teamValue,
    );
    addText(
        widgetName(["ConquestScore", teamValue, "Enemy"]),
        mod.CreateVector(315, 45, 0),
        mod.CreateVector(86, 40, 0),
        root,
        message("{}", getTeamScore(otherTeam(teamValue))),
        32,
        TEAM_2_TEXT(),
        TEAM_2_BG(),
        0.8,
        mod.UIBgFill.Blur,
        teamValue,
    );
    addContainer(widgetName(["ConquestBarBg", teamValue, "Friendly"]), mod.CreateVector(-160, 60, 0), mod.CreateVector(200, 10, 0), root, TEAM_1_BG(), 0.8, mod.UIBgFill.Blur, teamValue);
    addContainer(widgetName(["ConquestBarBg", teamValue, "Enemy"]), mod.CreateVector(160, 60, 0), mod.CreateVector(200, 10, 0), root, TEAM_2_BG(), 0.8, mod.UIBgFill.Blur, teamValue);
    addContainer(widgetName(["ConquestBar", teamValue, "Friendly"]), mod.CreateVector(-260, 60, 0), mod.CreateVector(200, 10, 0), root, TEAM_1_TEXT(), 1, mod.UIBgFill.Solid, teamValue);
    addContainer(widgetName(["ConquestBar", teamValue, "Enemy"]), mod.CreateVector(260, 60, 0), mod.CreateVector(200, 10, 0), root, TEAM_2_TEXT(), 1, mod.UIBgFill.Solid, teamValue);
    updateTeamHud(teamValue);
}

function createObjectiveHud(root: mod.UIWidget): void {
    const points = mod.AllCapturePoints();
    const total = countPortalArray(points);
    if (total <= 0) return;

    for (let i = 0; i < total; i += 1) {
        const point = portalArrayValue<mod.CapturePoint>(points, i);
        const x = (i - (total - 1) / 2) * 50;
        addText(
            objectiveWidgetName(point, "Text"),
            mod.CreateVector(x, 90, 0),
            mod.CreateVector(30, 30, 0),
            root,
            message(flagLetter(point)),
            24,
            objectiveTextColor(point),
            objectiveBgColor(point),
            0.8,
            mod.UIBgFill.Blur,
        );
        addText(
            objectiveWidgetName(point, "Outline"),
            mod.CreateVector(x, 90, 0),
            mod.CreateVector(30, 30, 0),
            root,
            message(""),
            24,
            objectiveTextColor(point),
            objectiveTextColor(point),
            1,
            mod.UIBgFill.OutlineThin,
        );
    }
}

function objectiveWidgetName(point: mod.CapturePoint, suffix: string): string {
    return widgetName(["ConquestObjective", point, suffix]);
}

function objectiveTextColor(point: mod.CapturePoint): mod.Vector {
    const owner = mod.GetCurrentOwnerTeam(point);
    if (teamId(owner) === TEAM_1_ID) return TEAM_1_TEXT();
    if (teamId(owner) === TEAM_2_ID) return TEAM_2_TEXT();
    if (teamId(owner) === NEUTRAL_TEAM_ID) return WHITE();
    return WHITE();
}

function objectiveBgColor(point: mod.CapturePoint): mod.Vector {
    const owner = mod.GetCurrentOwnerTeam(point);
    if (teamId(owner) === TEAM_1_ID) return TEAM_1_BG();
    if (teamId(owner) === TEAM_2_ID) return TEAM_2_BG();
    if (teamId(owner) === NEUTRAL_TEAM_ID) return BLACK();
    return BLACK();
}

type ObjectiveHudAppearance = {
    color: mod.Vector;
    bgColor: mod.Vector;
    alpha: number;
    textBgAlpha: number;
};

function objectiveHudAppearance(point: mod.CapturePoint): ObjectiveHudAppearance {
    const isChanging = isCapturePointChanging(point);
    const sharedAlpha = isChanging ? objectiveFlashAlpha() : 1;
    return {
        color: objectiveTextColor(point),
        bgColor: objectiveBgColor(point),
        alpha: sharedAlpha,
        textBgAlpha: isChanging ? sharedAlpha : 0.8,
    };
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

// Keeps objective letters and small capture-progress bars in sync with the current capture state.
function updateSharedHud(): void {
    updateTimerHud();
    updateObjectiveHud();
}

function updateTimerHud(): void {
    setTextIfPresent("ConquestTimer", timeMessage(), find(sharedHudRootName()));
}

function updateObjectiveHud(): void {
    const points = mod.AllCapturePoints();
    const total = countPortalArray(points);
    if (total <= 0) return;

    for (let i = 0; i < total; i += 1) {
        const point = portalArrayValue<mod.CapturePoint>(points, i);
        updateObjectiveHudForPoint(point);
    }
}

function updateObjectiveHudForPoint(point: mod.CapturePoint): void {
    const outlineName = objectiveWidgetName(point, "Outline");
    const textName = objectiveWidgetName(point, "Text");
    const appearance = objectiveHudAppearance(point);
    setTextIfPresent(textName, message(flagLetter(point)));
    setWidgetColorIfPresent(textName, appearance.bgColor);
    setTextColorIfPresent(textName, appearance.color);
    setTextColorIfPresent(outlineName, appearance.color);
    setWidgetColorIfPresent(outlineName, appearance.color);
    setTextAlphaIfPresent(textName, appearance.alpha);
    setWidgetAlphaIfPresent(textName, appearance.textBgAlpha);
    setWidgetAlphaIfPresent(outlineName, appearance.alpha);
}

function isCapturePointChanging(point: mod.CapturePoint): boolean {
    const progress = mod.GetCaptureProgress(point);
    return progress > 0 && progress < 1;
}

function objectiveFlashAlpha(): number {
    return captureFlashAlpha();
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

function setTextColorIfPresent(name: string, color: mod.Vector): void {
    if (mod.HasUIWidgetWithName(name)) mod.SetUITextColor(find(name), color);
}

function setWidgetColorIfPresent(name: string, color: mod.Vector): void {
    if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetBgColor(find(name), color);
}

function setTextAlphaIfPresent(name: string, alpha: number): void {
    if (mod.HasUIWidgetWithName(name)) mod.SetUITextAlpha(find(name), alpha);
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

function enableAmmoResupplyVFX(): void {
    for (const vfxId of AMMO_RESUPPLY_VFX_IDS) {
        mod.EnableVFX(mod.GetVFX(vfxId), true);
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
    cleanupCommanderAbilityObjects();
    stopCommanderCameraMoveForAll();
    for (const playerId of Array.from(commanderAbilityMenuStatesByPlayerId.keys())) {
        closeCommanderAbilityMenuByPlayerId(playerId);
    }
    commanderAbilityMenuStatesByPlayerId.clear();
    commanderAbilityRequestsByPlayerId.clear();
    commanderAbilityGroundRequestsByPlayerId.clear();
    commanderAbilityRuntimeByPlayerId.clear();
    commanderInitialCooldownByPlayerId.clear();
    commanderAbilityRequestSequence = 0;
    commanderAbilityRunSequence = 0;
    playerStates.clear();
    objectiveHudLoops.clear();
    playerCaptureHudLoops.clear();
    oobCountdownLoops.clear();
    playersByCapturePoint.clear();
    captureProgressHudByPoint.clear();
    ammoResupplyLastUsedByPlayerId.clear();
    ammoResupplyNoticeTokenByPlayerId.clear();
    commanderFixedHudTestDesiredPlayerIds.clear();
    commanderFixedHudTestActivePlayerIds.clear();
    commanderCameraMoveStatesByPlayerId.clear();
    commanderElectionRestrictedPlayerIds.clear();
    commanderElectionAiFrozenPlayerIds.clear();
    commanderPortalGadgetPlayerIds.clear();
    resetCommanderElectionState();
    state.initialized = true;
    state.gameOngoing = false;
    state.enableTeamSwitching = true;
    state.enableVO = true;
    state.enableOOB = true;
    state.enableVehicleSpawns = true;
    state.givePlayersNVG = false;
    state.givePlayersGasMask = false;
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

    setTeamScore(team(TEAM_1_ID), getStartingScore(team(TEAM_1_ID)));
    setTeamScore(team(TEAM_2_ID), getStartingScore(team(TEAM_2_ID)));
}

function setupConquestFoundation(): void {
    mod.SetGameModeTimeLimit(TIME_LIMIT_SECONDS);
    mod.SetGameModeTargetScore(GAME_MODE_TARGET_SCORE);
    mod.SetVehicleCategoryAllowedInSurroundingArea(mod.VehicleCategories.Air_All, true);
    setupScoreboard();
    setupAllCapturePoints();
    createSharedHud();
    createTeamHud(team(TEAM_1_ID));
    createTeamHud(team(TEAM_2_ID));
    enableAmmoResupplyVFX();
}

function startConquestGameplay(): void {
    if (commanderElection.gameplayStarted || state.gameOngoing) return;
    mod.LoadMusic(mod.MusicPackages.Core);
    mod.PlayMusic(mod.MusicEvents.Core_LastPhaseBegin);
    state.gameOngoing = true;
    commanderElection.gameplayStarted = true;
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
    endConquest();
}

// Finalizes the round and chooses the winning team from remaining tickets.
function endConquest(): void {
    state.endGameStarted = true;
    state.gameOngoing = false;
    mod.PauseGameModeTime(true);
    setTeamScore(team(TEAM_1_ID), getTeamScore(team(TEAM_1_ID)));
    setTeamScore(team(TEAM_2_ID), getTeamScore(team(TEAM_2_ID)));
    updateAllHud();
    mod.PlayMusic(mod.MusicEvents.Core_EndOfRound_Loop);

    const team1Score = getTeamScore(team(TEAM_1_ID));
    const team2Score = getTeamScore(team(TEAM_2_ID));
    if (team1Score > team2Score) {
        mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1, team(TEAM_1_ID));
        mod.EndGameMode(team(TEAM_1_ID));
    } else if (team2Score > team1Score) {
        mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1, team(TEAM_2_ID));
        mod.EndGameMode(team(TEAM_2_ID));
    } else {
        mod.EndGameMode(team(NEUTRAL_TEAM_ID));
    }
    cleanupCaptureSounds();
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

    addText(widgetName([rootName, "ObjectiveText"]), mod.CreateVector(0, 150, 0), mod.CreateVector(230, 40, 0), root, message(""), 34, WHITE(), BLACK(), 0.8, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "ObjectiveCount"]), mod.CreateVector(0, 210, 0), mod.CreateVector(230, 40, 0), root, message(""), 28, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    addContainer(widgetName([rootName, "ObjectiveProgressBg"]), mod.CreateVector(0, 200, 0), mod.CreateVector(220, 7, 0), root, BLACK(), 0.8, mod.UIBgFill.Blur, player);
    addContainer(widgetName([rootName, "ObjectiveProgress"]), mod.CreateVector(-110, 200, 0), mod.CreateVector(2, 7, 0), root, WHITE(), 1, mod.UIBgFill.Solid, player);
    addText(widgetName([rootName, "OOBShade"]), mod.CreateVector(0, 0, 0), mod.CreateVector(5000, 5000, 0), root, message(""), 24, BLACK(), BLACK(), 0.9, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "OOBText"]), mod.CreateVector(0, 470, 0), mod.CreateVector(420, 150, 0), root, message("Return To Combat"), 56, TEAM_2_TEXT(), TEAM_2_BG(), 0.8, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "OOBCounter"]), mod.CreateVector(0, 560, 0), mod.CreateVector(180, 80, 0), root, message(""), 72, TEAM_2_TEXT(), BLACK(), 0, mod.UIBgFill.None, player);
    addText(widgetName([rootName, "AmmoResupplyNotice"]), mod.CreateVector(0, 320, 0), mod.CreateVector(360, 36, 0), root, message(""), 24, WHITE(), BLACK(), 0.75, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "BuildVersion"]), mod.CreateVector(650, 66, 0), mod.CreateVector(510, 24, 0), root, message(TOKAI_CONQUEST_RELEASE_BUILD_ID), 14, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    addContainer(widgetName([rootName, "CommanderViewReticleVerticalUpper"]), mod.CreateVector(0, 270, 0), mod.CreateVector(3, 250, 0), root, WHITE(), 0.48, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleVerticalLower"]), mod.CreateVector(0, 560, 0), mod.CreateVector(3, 250, 0), root, WHITE(), 0.48, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleHorizontalLeft"]), mod.CreateVector(-119, 540, 0), mod.CreateVector(202, 3, 0), root, WHITE(), 0.52, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleHorizontalRight"]), mod.CreateVector(119, 540, 0), mod.CreateVector(202, 3, 0), root, WHITE(), 0.52, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleCenterULeft"]), mod.CreateVector(-14, 526, 0), mod.CreateVector(3, 30, 0), root, WHITE(), 0.62, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleCenterURight"]), mod.CreateVector(14, 526, 0), mod.CreateVector(3, 30, 0), root, WHITE(), 0.62, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleCenterUBottom"]), mod.CreateVector(0, 553, 0), mod.CreateVector(28, 3, 0), root, WHITE(), 0.62, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleCenterBoxTop"]), mod.CreateVector(0, 526, 0), mod.CreateVector(28, 3, 0), root, WHITE(), 0.62, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleTopLeftHorizontal"]), mod.CreateVector(-224, 410, 0), mod.CreateVector(72, 3, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleTopLeftVertical"]), mod.CreateVector(-260, 410, 0), mod.CreateVector(3, 68, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleTopRightHorizontal"]), mod.CreateVector(224, 410, 0), mod.CreateVector(72, 3, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleTopRightVertical"]), mod.CreateVector(260, 410, 0), mod.CreateVector(3, 68, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleBottomLeftHorizontal"]), mod.CreateVector(-224, 667, 0), mod.CreateVector(72, 3, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleBottomLeftVertical"]), mod.CreateVector(-260, 602, 0), mod.CreateVector(3, 68, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleBottomRightHorizontal"]), mod.CreateVector(224, 667, 0), mod.CreateVector(72, 3, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewReticleBottomRightVertical"]), mod.CreateVector(260, 602, 0), mod.CreateVector(3, 68, 0), root, WHITE(), 0.58, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltScaleLine"]), mod.CreateVector(342, COMMANDER_VIEW_ALT_SCALE_TOP_Y, 0), mod.CreateVector(3, 440, 0), root, BLACK(), 0.82, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltTick500"]), mod.CreateVector(352, COMMANDER_VIEW_ALT_SCALE_TOP_Y, 0), mod.CreateVector(14, 3, 0), root, BLACK(), 0.78, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltTick400"]), mod.CreateVector(352, COMMANDER_VIEW_ALT_SCALE_TOP_Y + COMMANDER_VIEW_ALT_SCALE_STEP_Y, 0), mod.CreateVector(14, 3, 0), root, BLACK(), 0.78, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltTick300"]), mod.CreateVector(352, COMMANDER_VIEW_ALT_SCALE_TOP_Y + COMMANDER_VIEW_ALT_SCALE_STEP_Y * 2, 0), mod.CreateVector(14, 3, 0), root, BLACK(), 0.78, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltTick200"]), mod.CreateVector(352, COMMANDER_VIEW_ALT_SCALE_TOP_Y + COMMANDER_VIEW_ALT_SCALE_STEP_Y * 3, 0), mod.CreateVector(14, 3, 0), root, BLACK(), 0.78, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltTick100"]), mod.CreateVector(352, COMMANDER_VIEW_ALT_SCALE_TOP_Y + COMMANDER_VIEW_ALT_SCALE_STEP_Y * 4, 0), mod.CreateVector(14, 3, 0), root, BLACK(), 0.78, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltBgTitle"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 250, 0), mod.CreateVector(30, 14, 0), root, WHITE(), 0.22, mod.UIBgFill.Blur, player);
    addContainer(widgetName([rootName, "CommanderViewAltBg500"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 259, 0), mod.CreateVector(30, 22, 0), root, WHITE(), 0.22, mod.UIBgFill.Blur, player);
    addContainer(widgetName([rootName, "CommanderViewAltBg400"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 369, 0), mod.CreateVector(30, 22, 0), root, WHITE(), 0.22, mod.UIBgFill.Blur, player);
    addContainer(widgetName([rootName, "CommanderViewAltBg300"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 479, 0), mod.CreateVector(30, 22, 0), root, WHITE(), 0.22, mod.UIBgFill.Blur, player);
    addContainer(widgetName([rootName, "CommanderViewAltBg200"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 589, 0), mod.CreateVector(30, 22, 0), root, WHITE(), 0.22, mod.UIBgFill.Blur, player);
    addContainer(widgetName([rootName, "CommanderViewAltBg100"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 699, 0), mod.CreateVector(30, 22, 0), root, WHITE(), 0.22, mod.UIBgFill.Blur, player);
    addText(widgetName([rootName, "CommanderViewAltTitle"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 250, 0), mod.CreateVector(30, 14, 0), root, message("ALT"), 11, BLACK(), WHITE(), 0, mod.UIBgFill.None, player);
    addText(widgetName([rootName, "CommanderViewAlt500"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 259, 0), mod.CreateVector(30, 22, 0), root, message("500"), 13, BLACK(), WHITE(), 0, mod.UIBgFill.None, player);
    addText(widgetName([rootName, "CommanderViewAlt400"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 369, 0), mod.CreateVector(30, 22, 0), root, message("400"), 13, BLACK(), WHITE(), 0, mod.UIBgFill.None, player);
    addText(widgetName([rootName, "CommanderViewAlt300"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 479, 0), mod.CreateVector(30, 22, 0), root, message("300"), 13, BLACK(), WHITE(), 0, mod.UIBgFill.None, player);
    addText(widgetName([rootName, "CommanderViewAlt200"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 589, 0), mod.CreateVector(30, 22, 0), root, message("200"), 13, BLACK(), WHITE(), 0, mod.UIBgFill.None, player);
    addText(widgetName([rootName, "CommanderViewAlt100"]), mod.CreateVector(COMMANDER_VIEW_ALT_SCALE_X, 699, 0), mod.CreateVector(30, 22, 0), root, message("100"), 13, BLACK(), WHITE(), 0, mod.UIBgFill.None, player);
    addContainer(widgetName([rootName, "CommanderViewAltMarkerDot"]), mod.CreateVector(COMMANDER_VIEW_ALT_MARKER_X, 485, 0), mod.CreateVector(10, 10, 0), root, WHITE(), 0.92, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderViewAltMarkerLine"]), mod.CreateVector(342, 489, 0), mod.CreateVector(18, 3, 0), root, WHITE(), 0.92, mod.UIBgFill.Solid, player);
    addContainer(widgetName([rootName, "CommanderTopViewHelpPanel"]), mod.CreateVector(67, 903, 0), mod.CreateVector(780, 150, 0), root, BLACK(), 0.74, mod.UIBgFill.Blur, player);
    addLeftText(widgetName([rootName, "CommanderTopViewHelpLineCamera"]), mod.CreateVector(60, 935, 0), mod.CreateVector(760, 30, 0), root, message("CAMERA:          Move:WASD   High:sub-weapon Low:Main-weapon"), 13, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    addLeftText(widgetName([rootName, "CommanderTopViewHelpLineHud"]), mod.CreateVector(60, 975, 0), mod.CreateVector(760, 30, 0), root, message("HUD ON:          OPEN MAP"), 14, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    addLeftText(widgetName([rootName, "CommanderTopViewHelpLineEnd"]), mod.CreateVector(60, 1015, 0), mod.CreateVector(760, 30, 0), root, message("END_CMD_MODE:    AIM"), 14, WHITE(), BLACK(), 0, mod.UIBgFill.None, player);
    createCommanderAbilityStatusHud(player, root);
    setPlayerObjectiveVisible(player, false, true);
    setPlayerOobVisible(player, false);
    setPlayerAmmoResupplyNoticeVisible(player, false);
    setPlayerBuildVersionVisible(player);
    setCommanderTopViewHelpVisible(player, false);
    setCommanderViewHudVisible(player, false);
}

function playerHudWidget(player: mod.Player, suffix: string): string {
    return widgetName(["ConquestPlayerHUD", player, suffix]);
}

function setPlayerObjectiveVisible(player: mod.Player, visible: boolean, force = false): void {
    const current = playerState(player);
    if (!force && current.objectiveHudVisible === visible) return;
    for (const suffix of ["ObjectiveText", "ObjectiveCount", "ObjectiveProgressBg", "ObjectiveProgress"]) {
        const name = playerHudWidget(player, suffix);
        if (mod.HasUIWidgetWithName(name)) mod.SetUIWidgetVisible(find(name), visible);
    }
    current.objectiveHudVisible = visible;
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
        current.outOfBounds = false;
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

// Updates the per-player capture HUD that appears while standing inside an objective.
function updatePlayerCaptureHud(player: mod.Player, point: mod.CapturePoint, occupancy: PointOccupancy, progressHud = captureProgressHud(point)): void {
    const progress = progressHud.progress;
    const rootName = widgetName(["ConquestPlayerHUD", player]);
    const current = playerState(player);
    const playerTeam = mod.GetTeam(player);
    const friendlyCount = friendlyCountForTeam(occupancy, playerTeam);
    const enemyCount = enemyCountForTeam(occupancy, playerTeam);
    const owner = mod.GetCurrentOwnerTeam(point);
    const ownerProgressTeam = mod.GetOwnerProgressTeam(point);
    const playerIsProgressOwner = mod.Equals(ownerProgressTeam, playerTeam);
    const textColorKey = playerObjectiveTextColorKey(playerTeam, owner);
    const progressColorKey = playerIsProgressOwner ? TEAM_1_ID : TEAM_2_ID;
    const label = captureStatusLabel(player, point, progress);

    if (current.lastObjectiveLabel !== label) {
        setTextIfPresent(widgetName([rootName, "ObjectiveText"]), message(label));
        current.lastObjectiveLabel = label;
    }
    if (current.lastObjectiveFriendlyCount !== friendlyCount || current.lastObjectiveEnemyCount !== enemyCount) {
        setTextIfPresent(widgetName([rootName, "ObjectiveCount"]), message("{} - {}", friendlyCount, enemyCount));
        current.lastObjectiveFriendlyCount = friendlyCount;
        current.lastObjectiveEnemyCount = enemyCount;
    }
    if (current.lastObjectiveTextColorKey !== textColorKey) {
        setTextColorIfPresent(widgetName([rootName, "ObjectiveText"]), playerObjectiveTextColor(textColorKey));
        current.lastObjectiveTextColorKey = textColorKey;
    }
    if (current.lastObjectiveProgressColorKey !== progressColorKey) {
        setWidgetColorIfPresent(widgetName([rootName, "ObjectiveProgress"]), progressColorKey === TEAM_1_ID ? TEAM_1_TEXT() : TEAM_2_TEXT());
        current.lastObjectiveProgressColorKey = progressColorKey;
    }
    if (current.lastObjectiveProgress !== progress) {
        setSizeAndPositionIfPresent(widgetName([rootName, "ObjectiveProgress"]), progressHud.progressSize, progressHud.progressPosition);
        current.lastObjectiveProgress = progress;
    }
    playCaptureTickSound(player, point, progress);
    current.lastCaptureProgress = progress;
}

function playerObjectiveTextColorKey(playerTeam: mod.Team, owner: mod.Team): number {
    if (mod.Equals(owner, playerTeam)) return TEAM_1_ID;
    if (teamId(owner) === NEUTRAL_TEAM_ID) return NEUTRAL_TEAM_ID;
    return TEAM_2_ID;
}

function playerObjectiveTextColor(colorKey: number): mod.Vector {
    if (colorKey === TEAM_1_ID) return TEAM_1_TEXT();
    if (colorKey === TEAM_2_ID) return TEAM_2_TEXT();
    return WHITE();
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

// Converts the current objective state into the player-facing label.
function captureStatusLabel(player: mod.Player, point: mod.CapturePoint, progress = mod.GetCaptureProgress(point)): string {
    const owner = mod.GetCurrentOwnerTeam(point);
    if (progress >= 1 && mod.Equals(owner, mod.GetTeam(player))) return "SECURED";
    if (progress >= 1) return "CONTESTED";
    const progressTeam = mod.GetOwnerProgressTeam(point);
    if (mod.Equals(progressTeam, mod.GetTeam(player))) return "CAPTURING";
    if (teamId(progressTeam) === NEUTRAL_TEAM_ID) return "CONTESTED";
    return "LOSING";
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
    maybeRefreshHud();
    maybeBleedTickets();
    maybePlayStatusVO();
    checkConquestAssaultWin();
    checkEndGame();
}

// Portal event: called when the game mode starts.
export function OnGameModeStarted(): void {
    initializeConquestState();
    setupConquestFoundation();
    void startCommanderElection();
}

// Portal event: creates per-player HUD and initializes scoreboard values.
export function OnPlayerJoinGame(eventPlayer: mod.Player): void {
    initializePlayerState(eventPlayer);
    if (isCommanderElectionActive() && isAiSoldier(eventPlayer)) {
        applyCommanderElectionAiFreeze(eventPlayer, true);
        applyCommanderElectionAiIdle(eventPlayer);
        return;
    }
    createPlayerHud(eventPlayer);
    updatePlayerScoreboard(eventPlayer);
    if (isCommanderElectionActive()) {
        applyCommanderElectionRestrictions(eventPlayer, true);
        syncCommanderElectionUi(eventPlayer);
    } else if (commanderElection.phase === "complete") {
        syncCommanderResultUiForPlayer(eventPlayer);
        syncCommanderGadgetForPlayer(eventPlayer);
    }
    if (state.gameOngoing) updateAllHud();
}

// Portal event: resets temporary player state and gives optional NVG equipment.
export function OnPlayerDeployed(eventPlayer: mod.Player): void {
    if (isCommanderElectionActive() && isAiSoldier(eventPlayer)) {
        applyCommanderElectionAiFreeze(eventPlayer, true);
        applyCommanderElectionAiIdle(eventPlayer);
        return;
    }
    const current = playerState(eventPlayer);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = false;
    current.outOfBounds = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;
    resetPlayerCaptureHudCache(eventPlayer);
    setPlayerObjectiveVisible(eventPlayer, false);
    if (state.givePlayersNVG) mod.AddEquipment(eventPlayer, mod.Gadgets.Mask_NVG);
    if (state.givePlayersGasMask) mod.AddEquipment(eventPlayer, mod.Gadgets.Mask_Gas);
    if (state.nightMode) mod.EnableScreenEffect(eventPlayer, mod.ScreenEffects.Night, true);
    setPlayerBuildVersionVisible(eventPlayer);
    if (isCommanderElectionActive()) {
        applyCommanderElectionRestrictions(eventPlayer, true);
        syncCommanderElectionUi(eventPlayer);
        return;
    }
    applyCommanderElectionRestrictions(eventPlayer, false);
    setCommanderElectionUiInputMode(eventPlayer, false);
    syncCommanderGadgetForPlayer(eventPlayer);
    enableCommanderFixedHudTestCameraOnDeploy(eventPlayer);
}

// PortalGadget AIM toggles the elected Commander's FixedCamera TOPVIEW.
export function OnPortalGadgetAimStart(eventPlayer: mod.Player): void {
    if (!isCommanderPlayer(eventPlayer)) return;
    syncCommanderGadgetForPlayer(eventPlayer);
    if (commanderFixedHudTestActivePlayerIds.has(mod.GetObjId(eventPlayer))) {
        forceCommanderFixedHudTestCameraOff(eventPlayer);
        return;
    }
    requestCommanderFixedHudTest(eventPlayer);
}

export function OnPortalGadgetFireStart(eventPlayer: mod.Player): void {
    if (!isCommanderPlayer(eventPlayer)) return;
    const playerId = mod.GetObjId(eventPlayer);
    if (!commanderFixedHudTestActivePlayerIds.has(playerId)) return;
    if (commanderAbilityMenuStatesByPlayerId.has(playerId)) return;
    openCommanderAbilityMenu(eventPlayer);
}

export function OnPortalGadgetFireStop(eventPlayer: mod.Player): void {
    const menuState = commanderAbilityMenuStatesByPlayerId.get(mod.GetObjId(eventPlayer));
    if (menuState !== undefined) menuState.fireReleasedAfterOpen = true;
}

export function OnPlayerUIButtonEvent(eventPlayer: mod.Player, eventUIWidget: mod.UIWidget, eventUIButtonEvent: mod.UIButtonEvent): void {
    const buttonName = mod.GetUIWidgetName(eventUIWidget);
    const abilityButtonIndex = commanderAbilityButtonIndexesByName.get(buttonName);
    if (abilityButtonIndex !== undefined && mod.Equals(eventUIButtonEvent, mod.UIButtonEvent.HoverIn)) {
        handleCommanderAbilityButtonHover(eventPlayer, abilityButtonIndex, true);
        return;
    }
    if (abilityButtonIndex !== undefined && mod.Equals(eventUIButtonEvent, mod.UIButtonEvent.HoverOut)) {
        handleCommanderAbilityButtonHover(eventPlayer, abilityButtonIndex, false);
        return;
    }
    if (!mod.Equals(eventUIButtonEvent, mod.UIButtonEvent.ButtonUp)) return;
    const abilityHandler = commanderAbilityButtonHandlers.get(buttonName);
    if (abilityHandler !== undefined) {
        abilityHandler(eventPlayer);
        return;
    }
    const handler = commanderElectionButtonHandlers.get(buttonName);
    if (handler !== undefined) {
        handler(eventPlayer);
        return;
    }
    if (buttonName === commanderElectionCandidateButtonName(eventPlayer)) {
        handleCommanderElectionCandidateButton(eventPlayer);
        return;
    }
    handleCommanderElectionVoteButton(eventPlayer, buttonName);
}

export function OnRayCastHit(eventPlayer: mod.Player, eventPoint: mod.Vector, _eventNormal: mod.Vector): void {
    void _eventNormal;
    handleCommanderAbilityGroundHit(eventPlayer, eventPoint);
}

export function OnRayCastMissed(eventPlayer: mod.Player): void {
    handleCommanderAbilityGroundMiss(eventPlayer);
}

// Portal event: applies death ticket bleed and updates death stats.
export function OnPlayerDied(eventPlayer: mod.Player, eventOtherPlayer: mod.Player, _eventDeathType: mod.DeathType, _eventWeaponUnlock: mod.WeaponUnlock): void {
    void _eventDeathType;
    void _eventWeaponUnlock;
    cleanupCommanderAbilityStateForPlayerId(mod.GetObjId(eventPlayer));
    if (!state.gameOngoing && isAiSoldier(eventPlayer)) {
        commanderElectionAiFrozenPlayerIds.delete(mod.GetObjId(eventPlayer));
        return;
    }
    const current = playerState(eventPlayer);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;
    current.lastDeathTime = mod.GetMatchTimeElapsed();
    resetPlayerCaptureHudCache(eventPlayer);
    setPlayerObjectiveVisible(eventPlayer, false);
    forceCommanderFixedHudTestCameraOff(eventPlayer, false);
    if (!state.gameOngoing) return;
    addPlayerScore(eventPlayer, 0, PlayerVar.Deaths);
    addTeamScore(mod.GetTeam(eventPlayer), -1);
    void eventOtherPlayer;
    updateAllHud();
    checkEndGame();
}

// Portal event: handles undeploys that are not already counted by OnPlayerDied.
export function OnPlayerUndeploy(eventPlayer: mod.Player): void {
    cleanupCommanderAbilityStateForPlayerId(mod.GetObjId(eventPlayer));
    if (!state.gameOngoing && isAiSoldier(eventPlayer)) {
        commanderElectionAiFrozenPlayerIds.delete(mod.GetObjId(eventPlayer));
        return;
    }
    const current = playerState(eventPlayer);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;
    resetPlayerCaptureHudCache(eventPlayer);
    setPlayerObjectiveVisible(eventPlayer, false);
    setPlayerOobVisible(eventPlayer, false);
    forceCommanderFixedHudTestCameraOff(eventPlayer, false);
    if (isCommanderElectionActive()) applyCommanderElectionRestrictions(eventPlayer, true);
    if (!state.gameOngoing) return;
    if (current.ignoreOOB) return;

    const elapsed = mod.GetMatchTimeElapsed();
    if (current.lastDeathTime >= 0 && elapsed - current.lastDeathTime <= RECENT_DEATH_UNDEPLOY_GRACE_SECONDS) return;

    current.lastDeathTime = elapsed;
    addPlayerScore(eventPlayer, 0, PlayerVar.Deaths);
    addTeamScore(mod.GetTeam(eventPlayer), -1);
    updateAllHud();
    checkEndGame();
}

export function OnPlayerLeaveGame(eventNumber: number): void {
    closeCommanderAbilityMenuByPlayerId(eventNumber);
    cleanupCommanderAbilityStateForPlayerId(eventNumber);
    commanderAbilityRequestsByPlayerId.delete(eventNumber);
    removePlayerIdFromCommanderElection(eventNumber);
    cleanupCommanderRuntimeForPlayerId(eventNumber);
    commanderElectionAiFrozenPlayerIds.delete(eventNumber);
    commanderPortalGadgetPlayerIds.delete(eventNumber);
    if (isCommanderElectionActive()) syncCommanderElectionUiForAll();
}

export function OnPlayerSwitchTeam(eventPlayer: mod.Player, eventTeam: mod.Team): void {
    void eventTeam;
    const playerId = mod.GetObjId(eventPlayer);
    cleanupCommanderAbilityStateForPlayerId(playerId);
    removePlayerIdFromCommanderElection(playerId);
    cleanupCommanderRuntimeForPlayerId(playerId);
    forceCommanderFixedHudTestCameraOff(eventPlayer);
    removeCommanderFixedHudTestPortalGadget(eventPlayer);
    applyCommanderElectionRestrictions(eventPlayer, isCommanderElectionActive());
    if (isCommanderElectionActive()) syncCommanderElectionUiForAll();
}

// Portal event: awards score and kill count for enemy kills.
export function OnPlayerEarnedKill(eventPlayer: mod.Player, eventOtherPlayer: mod.Player, eventDeathType: mod.DeathType, _eventWeaponUnlock: mod.WeaponUnlock): void {
    void _eventWeaponUnlock;
    if (eventPlayer !== undefined && eventOtherPlayer !== undefined) {
        recordCommanderPrecisionAirstrikeKillCredit(eventPlayer, eventOtherPlayer);
    }
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
    if (mod.Equals(mod.GetTeam(eventPlayer), mod.GetTeam(eventOtherPlayer))) return;
    addPlayerScore(eventPlayer, ASSIST_SCORE, PlayerVar.Assists);
}

// Portal event: awards revive score to the reviving player.
export function OnRevived(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {
    if (!state.gameOngoing) return;
    if (!mod.IsPlayerValid(eventOtherPlayer)) return;
    addPlayerScore(eventOtherPlayer, REVIVE_SCORE, PlayerVar.Revives);
    updatePlayerScoreboard(eventPlayer);
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

// Portal event: continuously updates player and team objective HUD while a point is active.
export function OngoingCapturePoint(eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    updateCaptureProgressHud(eventCapturePoint);
    if (isCapturePointChanging(eventCapturePoint)) {
        startObjectiveHudLoop(eventCapturePoint);
    } else {
        updateObjectiveHudForPoint(eventCapturePoint);
    }
    startPlayerCaptureHudLoop(eventCapturePoint);
}

function updatePlayerCaptureHudsForPoint(point: mod.CapturePoint): boolean {
    const progressHud = updateCaptureProgressHud(point);
    const occupancy = trackedPointOccupancy(point);
    let updatedAnyPlayer = false;
    for (let i = 0; i < countPlayers(occupancy.players); i += 1) {
        const player = playerValue(occupancy.players, i);
        if (playerCanShowCaptureHud(player)) {
            updatedAnyPlayer = true;
            setPlayerObjectiveVisible(player, true);
            updatePlayerCaptureHud(player, point, occupancy, progressHud);
        } else if (mod.IsPlayerValid(player)) {
            setPlayerObjectiveVisible(player, false);
        }
    }
    return updatedAnyPlayer;
}

function startPlayerCaptureHudLoop(point: mod.CapturePoint): void {
    const pointId = mod.GetObjId(point);
    if (playerCaptureHudLoops.has(pointId)) return;
    playerCaptureHudLoops.add(pointId);
    void runPlayerCaptureHudLoop(point, pointId);
}

async function runPlayerCaptureHudLoop(point: mod.CapturePoint, pointId: number): Promise<void> {
    while (state.gameOngoing && updatePlayerCaptureHudsForPoint(point)) {
        await mod.Wait(PLAYER_CAPTURE_HUD_INTERVAL_SECONDS);
    }
    playerCaptureHudLoops.delete(pointId);
}

function startObjectiveHudLoop(point: mod.CapturePoint): void {
    const pointId = mod.GetObjId(point);
    if (objectiveHudLoops.has(pointId)) return;
    objectiveHudLoops.add(pointId);
    void runObjectiveHudLoop(point, pointId);
}

async function runObjectiveHudLoop(point: mod.CapturePoint, pointId: number): Promise<void> {
    while (state.gameOngoing && isCapturePointChanging(point)) {
        updateObjectiveHudForPoint(point);
        await mod.Wait(0.1);
    }
    updateObjectiveHudForPoint(point);
    objectiveHudLoops.delete(pointId);
}

// Portal event: shows the player capture HUD when entering an objective.
export function OnPlayerEnterCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    if (!playerCanShowCaptureHud(eventPlayer)) {
        setPlayerObjectiveVisible(eventPlayer, false);
        return;
    }
    const current = playerState(eventPlayer);
    untrackPlayerFromCurrentPoint(eventPlayer);
    current.onPoint = true;
    current.currentCapturePointId = mod.GetObjId(eventCapturePoint);
    const progressHud = updateCaptureProgressHud(eventCapturePoint);
    current.lastCaptureProgress = progressHud.progress;
    resetPlayerCaptureHudCache(eventPlayer);
    trackPlayerOnPoint(eventPlayer, eventCapturePoint);
    setPlayerObjectiveVisible(eventPlayer, true);
    updatePlayerCaptureHud(eventPlayer, eventCapturePoint, pointOccupancy(eventCapturePoint), progressHud);
    startPlayerCaptureHudLoop(eventCapturePoint);
}

// Portal event: hides the player capture HUD when leaving an objective.
export function OnPlayerExitCapturePoint(eventPlayer: mod.Player, _eventCapturePoint: mod.CapturePoint): void {
    if (!state.gameOngoing) return;
    const current = playerState(eventPlayer);
    untrackPlayerFromPoint(eventPlayer, mod.GetObjId(_eventCapturePoint));
    current.onPoint = false;
    current.currentCapturePointId = -1;
    current.captureTick = 0;
    resetPlayerCaptureHudCache(eventPlayer);
    setPlayerObjectiveVisible(eventPlayer, false);
}

// Portal event: optional team switching through interact points 998/999, plus legacy direct team points 1/2.
export function OnPlayerInteract(eventPlayer: mod.Player, eventInteractPoint: mod.InteractPoint): void {
    void eventPlayer;
    void eventInteractPoint;
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
    const playerId = mod.GetObjId(player);
    for (const slot of AMMO_MAG_REFILL_SLOTS) {
        refillPlayerAmmoStationSlot(player, playerId, slot);
    }
}

function refillPlayerAmmoStationSlot(player: mod.Player, playerId: number, slot: mod.InventorySlots): void {
    if (shouldSkipAmmoStationSlot(player, playerId, slot)) return;

    try {
        mod.SetInventoryMagazineAmmo(player, slot, AMMO_DIRECT_REFILL_AMOUNT);
    } catch (_error) {
        void _error;
    }
}

function shouldSkipAmmoStationSlot(player: mod.Player, playerId: number, slot: mod.InventorySlots): boolean {
    if (!mod.Equals(slot, COMMANDER_FIXED_HUD_TEST_PORTAL_GADGET_SLOT)) return false;
    if (commanderPortalGadgetPlayerIds.has(playerId)) return true;
    return safeHasCommanderFixedHudTestGadget(player);
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
        mod.SetObjectTransformOverTime(player, mod.CreateTransform(liftPosition, mod.CreateVector(0, yaw, 0)), travelTime, false, false);
    } else {
        mod.Teleport(player, mod.CreateVector(mod.XComponentOf(targetPosition), mod.YComponentOf(playerPosition), mod.ZComponentOf(targetPosition)), yaw);
        await mod.Wait(0.1);
        mod.SetObjectTransformOverTime(
            player,
            mod.CreateTransform(mod.Add(targetPosition, mod.Multiply(mod.UpVector(), 3)), mod.CreateVector(0, yaw, 0)),
            travelTime,
            false,
            false,
        );
    }

    await mod.Wait(travelTime + 0.1);
    mod.Teleport(player, targetPosition, yaw);
}

// Portal event: shows the out-of-bounds warning UI when enabled.
export function OnPlayerEnterAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
    void eventPlayer;
    void eventAreaTrigger;
}

// Portal event: hides the out-of-bounds warning UI.
export function OnPlayerExitAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {
    void eventPlayer;
    void eventAreaTrigger;
}

package at.posselt.kingmaker

import kotlinx.serialization.Serializable

@Serializable
enum class StructureTrait {
    edifice,
    yard,
    building,
    famous,
    infamous,
    residential,
    infrastructur,
}

@Serializable
enum class ItemGroup {
    divine,
    alchemical,
    primal,
    occult,
    arcane,
    luxury,
    magical,
    other,
}

@Serializable
data class ActivityBonusRule(
    val value: Int,
    val activity: String,
)

@Serializable
data class SkillBonusRule(
    val value: Int,
    val skill: Skill,
    val activity: String?,
)

@Serializable
data class AvailableItemsRule(
    val value: Int,
    val group: List<ItemGroup> = emptyList()
)

@Serializable
data class SettlementEventsRule(
    val value: Int,
)

@Serializable
data class LeadershipActivityRule(
    val value: Int,
)

@Serializable
data class CommodityStorage(
    val ore: Int = 0,
    val food: Int = 0,
    val lumber: Int = 0,
    val stone: Int = 0,
    val luxuries: Int = 0,
)

@Serializable
data class ConstructionSkill(
    val skill: Skill,
    val proficiencyRank: Int = 0,
)

@Serializable
data class Construction(
    val skills: List<ConstructionSkill>,
    val lumber: Int = 0,
    val luxuries: Int = 0,
    val ore: Int = 0,
    val stone: Int = 0,
    val rp: Int,
    val dc: Int,
)

@Serializable
data class Structure(
    val name: String,
    val stacksWith: String?,
    val construction: Construction?,
    val notes: String?,
    val preventItemLevelPenalty: Boolean = false,
    val enableCapitalInvestment: Boolean = false,
    val skillBonusRules: List<SkillBonusRule> = emptyList(),
    val activityBonusRules: List<ActivityBonusRule> = emptyList(),
    val availableItemsRules: List<AvailableItemsRule> = emptyList(),
    val settlementEventRules: List<SettlementEventsRule> = emptyList(),
    val leadershipActivityRules: List<LeadershipActivityRule> = emptyList(),
    val storage: CommodityStorage,
    val increaseLeadershipActivities: Boolean = false,
    val isBridge: Boolean = false,
    val consumptionReduction: Int = 0,
    val unlockActivities: List<String> = emptyList(),
    val traits: List<StructureTrait> = emptyList(),
    val lots: Int = 1,
    val affectsEvents: Boolean = false,
    val affectsDowntime: Boolean = false,
    val reducesUnrest: Boolean = false,
    val reducesRuin: Boolean = false,
    val level: Int = 1,
    val upgradeFrom: List<String> = emptyList(),
)
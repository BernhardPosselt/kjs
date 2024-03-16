package at.posselt.kingmaker

import kotlinx.serialization.Serializable

@Serializable
enum class Skill {
    agriculture,
    arts,
    boating,
    defense,
    engineering,
    exploration,
    folklore,
    industry,
    intrigue,
    magic,
    politics,
    scholarship,
    statecraft,
    trade,
    warfare,
    wilderness,
}

@Serializable
enum class Proficiency(val rank: Int) {
    untrained(0),
    trained(1),
    expert(2),
    master(3),
    legendary(4),
}
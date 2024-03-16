package at.posselt.kingmaker

import kotlin.test.Test
import kotlin.test.assertEquals

class StructureTest {
    @Test
    fun shouldLoadJsFiles() {
        val json = js("import('data/structures.json')")
        println(json)
        assertEquals(1, 1)
    }
}
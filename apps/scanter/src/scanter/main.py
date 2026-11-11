import asyncio

from scanter.models.area import BoundingBox
from scanter.models.vessels import Vessel, Faction
from scanter.models.vessels import Cutter, Sloop, Barge, Galleon, Frigate


vessels = [
    Cutter(name="Black Pearl", faction=Faction.PIRATE, draft=2.0, speed=8.0, position=(51.5, -0.1)),
    Sloop(name="Sea Breeze", faction=Faction.MERCHANT, draft=1.5, speed=6.0, position=(51.7, 0.2)),
    Barge(name="Cargo King", faction=Faction.NAVY, draft=3.0, speed=5.0, position=(51.2, -0.3)),
    Galleon(name="Golden Hind", faction=Faction.NEUTRAL, draft=4.0, speed=7.0, position=(51.8, 0.1)),
    Frigate(name="HMS Victory", faction=Faction.NAVY, draft=3.5, speed=9.0, position=(51.6, -0.2))
]


async def observe(
    vessels: list[Vessel],
    bbox: BoundingBox,
) -> None:
    """Observe current vessel positions."""

    for vessel in vessels:
        if bbox.contains(vessel.position):
            print(
                f"[OBSERVE] {vessel.name} "
                f"at {vessel.position}"
            )


async def move(
    vessels: list[Vessel],
) -> None:
    """Simulate movement of all vessels."""

    for vessel in vessels:
        lat, lon = vessel.position

        vessel.position = (
            lat + 0.01,
            lon + 0.01,
        )


async def detect_conflicts(
    vessels: list[Vessel],
) -> list[tuple[Vessel, Vessel]]:
    """Detect conflicts between vessels."""

    conflicts = []

    for i, vessel_a in enumerate(vessels):
        for vessel_b in vessels[i + 1:]:
            hostile_encounter = (
                {vessel_a.faction, vessel_b.faction}
                == {Faction.PIRATE, Faction.MERCHANT}
                or
                {vessel_a.faction, vessel_b.faction}
                == {Faction.PIRATE, Faction.NAVY}
            )

            same_position = (
                vessel_a.position == vessel_b.position
            )

            if hostile_encounter or same_position:
                conflicts.append((vessel_a, vessel_b))

    return conflicts


async def generate_reports(
    conflicts: list[tuple[Vessel, Vessel]],
) -> None:
    """Generate reports for detected conflicts."""

    for vessel_a, vessel_b in conflicts:
        print(
            f"[REPORT] Conflict detected: "
            f"{vessel_a.name} vs {vessel_b.name}"
        )


async def game_loop(
    vessels: list[Vessel],
    bbox: BoundingBox,
    interval: float = 1.0,
) -> None:
    """Run the simulation continuously."""

    tick = 0

    while True:
        tick += 1

        print(f"\n========== TICK {tick} ==========")

        # 1. Observe
        await observe(vessels, bbox)

        # 2. Move
        await move(vessels)

        # 3. Detect conflicts
        conflicts = await detect_conflicts(vessels)

        # 4. Generate reports
        if conflicts:
            await generate_reports(conflicts)

        # 5. Next tick
        await asyncio.sleep(interval)


async def setup():
    """Setup the simulation environment."""

    bbox = BoundingBox(
        min_lat=51.0,
        min_lon=-0.5,
        max_lat=52.0,
        max_lon=0.5,
    )

    await game_loop(vessels, bbox)

def main():
    asyncio.run(setup())


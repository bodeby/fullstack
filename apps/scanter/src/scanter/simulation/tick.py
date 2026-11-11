""" """

# models
from scanter.models.vessels import Faction


class SimulationTick:
    def __init__(self, repository):
        self.repository = repository

    def execute(self, tick_number):
        print(f"Executing tick {tick_number}")
        vessels = self.repository.get_all()

        pirates = [v for v in vessels if v["faction"] == Faction.PIRATE.name]
        navy = [v for v in vessels if v["faction"] == Faction.NAVY.name]
        merchants = [v for v in vessels if v["faction"] == Faction.MERCHANT.name]

        self.update_pirates(pirates)
        self.update_navy(navy)
        self.update_merchants(merchants)

    def update_pirates(self, pirates):
        for pirate in pirates:
            print(f"Updating pirate: {pirate['name']}")

    def update_navy(self, navy):
        for vessel in navy:
            print(f"Updating navy: {vessel['name']}")

    def update_merchants(self, merchants):
        for vessel in merchants:
            print(f"Updating merchant: {vessel['name']}")

from redis import Redis

# models
from scanter.models.vessels import Faction
from scanter.models.vessels import Cutter, Sloop, Barge, Galleon, Frigate

"""
Pirate vessels
"""

pirates = [
    Cutter(
        name="Black Pearl",
        faction=Faction.PIRATE,
        position=(51.5, -0.1),
    ),
    Sloop(
        name="Dying Gull",
        faction=Faction.PIRATE,
        position=(0, 0),
    ),
    Barge(
        name="Queen Anne's Revenge", 
        faction=Faction.PIRATE, 
        position=(51.40, -0.80)
    ),
    Galleon(
        name="The Flying Dutchman",
        faction=Faction.PIRATE,
        position=(0, 0),
    ),
    Frigate(
        name="Adventure Galley", 
        faction=Faction.PIRATE, 
        position=(51.40, -0.80)
    ),
]

"""
Navy vessels: 3 Navy ships to patrol
"""

navy = [
    Barge(
        name="HMS Interceptor",
        faction=Faction.NAVY,
        position=(51.2, -0.3),
    ),
    Frigate(
        name="HMS Providence",
        faction=Faction.NAVY,
        position=(51.6, -0.2),
    ),
    Frigate(
        name="HMS Endeavour",
        faction=Faction.NAVY,
        position=(51.6, -0.2),
    ),
]

"""
Merchant Vessels : 10 Merchant Vessels
"""

merchants = [
    Cutter(
        name="Golden Horizon",
        faction=Faction.MERCHANT,
        position=(51.70, 0.20),
    ),
    Sloop(
        name="Sea Breeze",
        faction=Faction.MERCHANT,
        position=(51.40, -0.80),
    ),
    Barge(
        name="Silver Mermaid",
        faction=Faction.MERCHANT,
        position=(50.80, -1.80),
    ),
    Galleon(
        name="Fortune's Grace",
        faction=Faction.MERCHANT,
        position=(50.50, -2.80),
    ),
    Cutter(
        name="Atlantic Voyage",
        faction=Faction.MERCHANT,
        position=(51.90, 0.50),
    ),
    Sloop(
        name="Morning Star",
        faction=Faction.MERCHANT,
        position=(50.30, -0.50),
    ),
    Barge(
        name="Merchant's Fortune",
        faction=Faction.MERCHANT,
        position=(49.90, -1.50),
    ),
    Galleon(
        name="Royal Fortune",
        faction=Faction.MERCHANT,
        position=(50.10, -3.50),
    ),
    Cutter(
        name="Ocean Pearl",
        faction=Faction.MERCHANT,
        position=(51.10, -3.80),
    ),
    Frigate(
        name="Eastern Wind",
        faction=Faction.MERCHANT,
        position=(49.70, -2.20),
    ),
]

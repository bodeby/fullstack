""" """

import time

from scanter.simulation.tick import SimulationTick
from scanter.storage.repository import Repository


class SimulationEngine:
    def __init__(self, tick_interval=1.0):
        self.tick_interval = tick_interval
        self.repository = Repository()
        self.tick = SimulationTick(self.repository)
        self.running = False
        self.current_tick = 0

    def start(self):
        self.running = True

        print("Starting Scanter simulation...")

        while self.running:
            start_time = time.monotonic()
            self.current_tick += 1
            self.tick.execute(self.current_tick)
            elapsed = time.monotonic() - start_time
            time.sleep(max(0, self.tick_interval - elapsed))

    def stop(self):
        self.running = False
        print("Stopping Scanter simulation...")

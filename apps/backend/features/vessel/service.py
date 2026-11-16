from dataclasses import dataclass


@dataclass
class FactionService:
    name: str = "FactionService"

    def greet(self):
        print(f"hello from {self.name}")

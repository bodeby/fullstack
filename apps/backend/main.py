from contextlib import asynccontextmanager
from fastapi import FastAPI

from database.sqlite import create_db_and_tables

from features.faction.router import router as faction_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)

# routers
app.include_router(faction_router)


@app.get("/")
async def root():
    return {"message": "Hello World"}

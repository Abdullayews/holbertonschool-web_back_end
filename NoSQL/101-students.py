#!/usr/bin/env python3
def top_students(mongo_collection):
    return mongo_collection.aggregate([
        {"$project": {
            "name": 1,
            "averageScore": {"$avg": "$topics.score"}
        }},
        {"$sort": {"averageScore": -1}}
    ])

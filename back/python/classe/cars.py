from enum import Enum
import uuid

class CarType(Enum):
    ELEC = "Électrique"
    HYB = "Hybride"
    DIES = "Diesel"
    

class Car: 
    def __init__(self, car_brand, car_model, car_type):
        self.id =  uuid.uuid4()
        self.brand = car_brand
        self.model = car_model
        self.type = car_type.value

    def to_dict(self):
        return {
            "id"  : self.id,
            "brand" : self.brand,
            "model" : self.model,
            "type"  : self.type,
        }
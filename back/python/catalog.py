from classe.cars import Car, CarType

car1 = Car( "Dacia", "jogger", CarType.ELEC)
car2 = Car( "Dacia", "lodgy", CarType.HYB)
car3 = Car( "Dacia", "duster", CarType.DIES)
car4 = Car( "renault", "espace", CarType.ELEC)
car5 = Car( "renault", "trafic", CarType.HYB)
car6 = Car( "renault", "twingo", CarType.DIES)
car7 = Car( "citroën", "C3", CarType.ELEC)
car8 = Car( "citroën", "C4", CarType.HYB)
car9 = Car( "citroën", "jumper", CarType.DIES)
car10 = Car( "BMW", "I7", CarType.ELEC)
car11 = Car( "BMW", "M5", CarType.HYB)
car12 = Car( "BMW", "iX3", CarType.DIES)

catalog = [
    car1,
    car2, 
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12,
]

def filtered_brand_catalog(catalog, car_brand=None, car_model=None, car_type=None):
    result =  catalog
    if car_brand: 
        result = [car for car in result if car.brand.lower() == car_brand.lower()]
    if car_model:
        result = [car for car in result if car.model.lower() == car_model.lower()] 
    if car_type:
        result = [car for car in result if car.type.lower() == car_type.lower()]
   
    return result






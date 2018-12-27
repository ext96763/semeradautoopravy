package com.semerad.autoopravy.mapper;


import com.semerad.autoopravy.model.Car;
import com.semerad.autoopravy.model.Customer;
import com.semerad.autoopravy.model.Repair;
import com.semerad.autoopravy.model.SparePart;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Interface to mybatis. Passing parameters to mybatis.
 */

@Mapper
public interface MainRepository {

    List<Customer> getAllCustomers();

    List<Car> getAllCars();

    List<Repair> getAllRepairs();

    List<SparePart> getAllParts();

    //------------------------------------------------------------------------------------------------------------------

    Customer getUserById(Integer id);

    List<Customer> getUserDetailById(@Param("userId") Integer id);

    void insertUser(Customer customer);

    void updateUser(Customer customer);

    void deleteUser(Integer id);

    List<Car> getUserCarsById(@Param("carUserId") Integer id);

    //------------------------------------------------------------------------------------------------------------------

    //    @Select(value = "select * from cars c  where 1=1 and c.car_id=#{carId}")
//    @ResultMap("carResultMap")
    Car getCarById(@Param("carId") Integer id);

    List<Car> getCarDetailById(@Param("carId") Integer id);

    void insertCar(Car car);

    void updateCar(Car car);

    void deleteCar(Integer id);

    List<Repair> getCarRepairsById(@Param("carId") Integer id);

    //------------------------------------------------------------------------------------------------------------------

    //    @Select(value = "select * from repairs r  where 1=1 and r.repair_id=#{repairId}")
//    @ResultMap("repairResultMap")
    Repair getRepairById(@Param("repairId") Integer id);

    List<Repair> getRepairDetailById(@Param("repairId") Integer id);

    void insertRepair(Repair repair);

    void updateRepair(Repair repair);

    void deleteRepair(Integer id);

    //------------------------------------------------------------------------------------------------------------------

    SparePart getPartById(@Param("partId") Integer id);

    void insertPart(SparePart sparePart);

    void updatePart(SparePart sparePart);

    void deletePart(Integer id);

    List<SparePart> getCarPartsById(@Param("carId") Integer id);

    //------------------------------------------------------------------------------------------------------------------

}

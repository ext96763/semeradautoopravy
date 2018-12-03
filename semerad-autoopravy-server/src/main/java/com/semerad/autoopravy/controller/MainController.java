package com.semerad.autoopravy.controller;

import com.semerad.autoopravy.mapper.MainRepository;
import com.semerad.autoopravy.model.Car;
import com.semerad.autoopravy.model.Customer;
import com.semerad.autoopravy.model.Repair;
import com.semerad.autoopravy.model.SparePart;
import io.swagger.annotations.*;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
public class MainController implements ErrorController {

    Logger logger = LogManager.getLogger(MainController.class);

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private MainRepository mainRepository;

    public MainController(@SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")MainRepository mainRepository) {
        this.mainRepository = mainRepository;
    }

    @Override
    public String getErrorPath() {
        return null;
    }

    @ApiOperation(value = "Find all users", notes = "find all users", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/customers", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    List<Customer> getAllUsers() {
        return mainRepository.getAllCustomers();
    }

    @ApiOperation(value = "Find all cars", notes = "find all cars", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/cars", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    List<Car> getAllCars() {
        return mainRepository.getAllCars();
    }

    @ApiOperation(value = "Find all repairs", notes = "find all repairs", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/repairs", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    List<Repair> getAllRepairs() {
        return mainRepository.getAllRepairs();
    }

    @ApiOperation(value = "Find all parts", notes = "find all parts", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/parts", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    List<SparePart> getAllParts() {
        return mainRepository.getAllParts();
    }
    //------------------------------------------------------------------------------------------------------------------

    /**
     * User By ID [GET]
     *
     * @return Particular user in JSON
     */
    @ApiOperation(value = "Search user by ID", notes = "Look for user by ID", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/user", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Customer> getUserById(@RequestParam(value = "id", required = true) Integer id) {
        Customer customer = new Customer();
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            customer = mainRepository.getUserById(id);
        } catch (Exception e) {
            logger.error("Cannot find in DB user with ID: " + id);
            return new ResponseEntity<>(customer, HttpStatus.NOT_FOUND);
        }
        if (customer == null) {
            logger.error("No matches in DB for userId: " + id + " wasn't found");
            responseHeaders.set("UserFound", "false");
            return new ResponseEntity<>(customer, responseHeaders, HttpStatus.NOT_FOUND);
        } else {
            responseHeaders.set("UserFound", "true");
            logger.info("User found ID: " + id);
        }
        return new ResponseEntity<>(customer, responseHeaders, HttpStatus.FOUND);
    }

    /**
     * User DETAIL By ID [GET]
     *
     * @param id unique user ID
     * @return Particular user in JSON
     */
    @ApiOperation(value = "Find user detail by ID", notes = "find user detail by ID", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/user/detail", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<List<Customer>> getUserDetailById(@RequestParam(value = "id", required = true) Integer id) {
        HttpHeaders responseHeaders = new HttpHeaders();
        List<Customer> customerDetail = new ArrayList<>();
        try {
            customerDetail = mainRepository.getUserDetailById(id);
        } catch (Exception e) {
            logger.error("Cannot find in DB user with ID: " + id);
            responseHeaders.set("UserFound", "false");
            return new ResponseEntity<>(customerDetail, responseHeaders, HttpStatus.NOT_FOUND);
        }
        if (customerDetail == null || customerDetail.size() <= 0) {
            logger.error("No matches in DB for userId: " + id + " wasn't found");
            responseHeaders.set("UserDetailFound", "false");
            return new ResponseEntity<>(customerDetail, responseHeaders, HttpStatus.NOT_FOUND);
        } else {
            responseHeaders.set("UserDetailFound", "true");
            logger.info("UserDetail found ID: " + id);
        }
        return new ResponseEntity<>(customerDetail, responseHeaders, HttpStatus.OK);
    }


    /**
     * Inserts new User into DB [POST]
     *
     * @param customer new object
     * @return if success same body
     */
    @SuppressWarnings("Duplicates")
    @ApiOperation(value = "Put new User", notes = "Post new User", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 201, message = "Created"),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/user", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Customer> insertNewUser(@RequestBody Customer customer) {
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            mainRepository.insertUser(customer);
        } catch (Exception e) {
            logger.error(e);
            if (e instanceof org.springframework.dao.DuplicateKeyException) {
                responseHeaders.set("DuplicatedUser", "true");
            }
            return new ResponseEntity<>(HttpStatus.INSUFFICIENT_STORAGE);
        }
        responseHeaders.set("UserSaved", "true");
        logger.info("New user is saved. User ID: " + customer.getUserId());
        return new ResponseEntity<>(customer, responseHeaders, HttpStatus.CREATED);
    }


    /**
     * Update user information in DB [PUT]
     *
     * @param customer updated Object of user
     * @return if success returns updated body of user
     */
    @ApiOperation(value = "Update User", notes = "update user", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/user", method = RequestMethod.PUT, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Customer> updateUser(@RequestBody Customer customer) {
        try {
            mainRepository.updateUser(customer);
        } catch (Exception e) {
            logger.error(e);
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("UserUpdated", "true");
        logger.info("User updated. User ID: " + customer.getUserId());
        return new ResponseEntity<>(customer, responseHeaders, HttpStatus.CREATED);
    }


    /**
     * Delete user by ID
     *
     * @param id is obtained from FE
     * @return null
     */
    @ApiOperation(value = "Delete User", notes = "Erase User", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/user", method = RequestMethod.DELETE, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Customer> deleteUser(@RequestParam(value = "id", required = true) Integer id) {
        try {
            mainRepository.deleteUser(id);
        } catch (Exception e) {
            logger.error(e);
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("UserDeleted", "true");
        logger.info("User Deleted. User ID: " + id);
        return new ResponseEntity<>(responseHeaders, HttpStatus.OK);
    }


    //----------------------------------------CAR endpoints-------------------------------------------------------------

    /**
     * Car By ID [GET]
     *
     * @return Particular car in JSON
     */
    @ApiOperation(value = "Find car by ID", notes = "Look for car by ID", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/car", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Car> getCarById(@RequestParam(value = "id", required = true) Integer id) {
        Car car = new Car();
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            car = mainRepository.getCarById(id);
        } catch (Exception e) {
            logger.error("Cannot find in DB car with ID: " + id);
            return new ResponseEntity<>(car, HttpStatus.NOT_FOUND);
        }
        if (car == null) {
            logger.error("No matches in DB for carId " + id + " wasn't found");
            responseHeaders.set("CarFound", "false");
            return new ResponseEntity<>(car, responseHeaders, HttpStatus.NOT_FOUND);
        } else {
            responseHeaders.set("CarFound", "true");
            logger.info("Car found ID: " + id);
        }
        return new ResponseEntity<>(car, responseHeaders, HttpStatus.OK);
    }

    /**
     * Car DETAIL By ID [GET]
     *
     * @param id unique car ID
     * @return Particular car in JSON
     */
    @ApiOperation(value = "Find car detail by ID", notes = "Look for car detail by ID", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/car/detail", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<List<Car>> getCarDetailById(@RequestParam(value = "id", required = true) Integer id) {
        List<Car> carDetail = new ArrayList<>();
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            carDetail = mainRepository.getCarDetailById(id);
        } catch (Exception e) {
            logger.error("Cannot find in DB car with ID: " + id);
            responseHeaders.set("CarDetailFound", "false");
            return new ResponseEntity<>(carDetail, responseHeaders, HttpStatus.NOT_FOUND);
        }
        if (carDetail == null || carDetail.size() <= 0) {
            logger.error("No matches in DB for carId: " + id + " wasn't found");
            responseHeaders.set("CarDetailFound", "false");
            return new ResponseEntity<>(carDetail, responseHeaders, HttpStatus.NOT_FOUND);
        } else {
            responseHeaders.set("CarDetailFound", "true");
            logger.info("CarDetail found ID: " + id);
        }
        return new ResponseEntity<>(carDetail, responseHeaders, HttpStatus.OK);
    }

    /**
     * Inserts new Car into DB [POST]
     *
     * @param car new object
     * @return if success same body
     */
    @SuppressWarnings("Duplicates")
    @ApiOperation(value = "Put new Car", notes = "Post new Car", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 201, message = "Created"),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/car", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Car> insertNewCar(@RequestBody Car car) {
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            mainRepository.insertCar(car);
        } catch (Exception e) {
            logger.error(e);
            if (e instanceof org.springframework.dao.DuplicateKeyException) {
                responseHeaders.set("CarSaved", "false");
                responseHeaders.set("DuplicatedCar", "true");
            }
            return new ResponseEntity<>(HttpStatus.INSUFFICIENT_STORAGE);
        }
        responseHeaders.set("CarSaved", "true");
        logger.info("New car is saved. Car ID: " + car.getCarId());
        return new ResponseEntity<>(car, responseHeaders, HttpStatus.CREATED);
    }

    /**
     * Update car information in DB [PUT]
     *
     * @param car updated Object of car
     * @return if success returns updated body of car
     */
    @ApiOperation(value = "Update Car", notes = "update car", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/car", method = RequestMethod.PUT, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Car> updateCar(@RequestBody Car car) {
        try {
            mainRepository.updateCar(car);
        } catch (Exception e) {
            logger.error(e);
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("CarUpdated", "true");
        logger.info("Car updated. Car ID: " + car.getCarId());
        return new ResponseEntity<>(car, responseHeaders, HttpStatus.CREATED);
    }

    /**
     * Delete car by ID
     *
     * @param id is obtained from FE
     * @return null
     */
    @ApiOperation(value = "Delete Car", notes = "Erase Car", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/car", method = RequestMethod.DELETE, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Car> deleteCar(@RequestParam(value = "id", required = true) Integer id) {
        try {
            mainRepository.deleteCar(id);
        } catch (Exception e) {
            logger.error(e);
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("CarDeleted", "true");
        logger.info("Car Deleted. Car ID: " + id);
        return new ResponseEntity<>(responseHeaders, HttpStatus.OK);
    }

    //----------------------------------------REPAIR endpoints----------------------------------------------------------

    /**
     * Repair By ID [GET]
     *
     * @return Particular repair in JSON
     */
    @ApiOperation(value = "Find repair by ID", notes = "Look for repair by ID", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/repair", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Repair> getRepairById(@RequestParam(value = "id", required = true) Integer id) {
        Repair repair = new Repair();
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            repair = mainRepository.getRepairById(id);
        } catch (Exception e) {
            logger.error("Cannot find in DB repair with ID: " + id);
            return new ResponseEntity<>(repair, HttpStatus.NOT_FOUND);
        }
        if (repair == null) {
            logger.error("No matches in DB for repairId " + id + " wasn't found");
            responseHeaders.set("RepairFound", "false");
            return new ResponseEntity<>(repair, responseHeaders, HttpStatus.NOT_FOUND);
        } else {
            responseHeaders.set("RepairFound", "true");
            logger.info("Repair found ID: " + id);
        }
        return new ResponseEntity<>(repair, responseHeaders, HttpStatus.FOUND);
    }


    /**
     * Repair DETAIL By ID [GET]
     *
     * @param id unique repair ID
     * @return Particular repair in JSON
     */
    @ApiOperation(value = "Find repair detail by ID", notes = "Look for repair detail by ID", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/repair/detail", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<List<Repair>> getRepairDetailById(@RequestParam(value = "id", required = true) Integer id) {
        List<Repair> repairDetail = new ArrayList<>();
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            repairDetail = mainRepository.getRepairDetailById(id);
        } catch (Exception e) {
            logger.error("Cannot find in DB repair with ID: " + id);
            responseHeaders.set("RepairDetailFound", "false");
            return new ResponseEntity<>(repairDetail, responseHeaders, HttpStatus.NOT_FOUND);
        }
        if (repairDetail == null || repairDetail.size() <= 0) {
            logger.error("No matches in DB for repairId: " + id + " wasn't found");
            responseHeaders.set("RepairDetailFound", "false");
            return new ResponseEntity<>(repairDetail, responseHeaders, HttpStatus.NOT_FOUND);
        } else {
            responseHeaders.set("RepairDetailFound", "true");
            logger.info("RepairDetail found ID: " + id);
        }
        return new ResponseEntity<>(repairDetail, responseHeaders, HttpStatus.FOUND);
    }

    /**
     * Inserts new Repair into DB [POST]
     *
     * @param repair new object
     * @return if success same body
     */
    @SuppressWarnings("Duplicates")
    @ApiOperation(value = "Put new Repair", notes = "Post new Repair", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 201, message = "Created"),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/repair", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Repair> insertNewRepair(@RequestBody Repair repair) {
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            mainRepository.insertRepair(repair);
        } catch (Exception e) {
            logger.error(e);
            if (e instanceof org.springframework.dao.DuplicateKeyException) {
                responseHeaders.set("RepairSaved", "false");
                responseHeaders.set("DuplicatedRepair", "true");
            }
            return new ResponseEntity<>(HttpStatus.INSUFFICIENT_STORAGE);
        }
        responseHeaders.set("RepairSaved", "true");
        logger.info("New repair is saved. Repair ID: " + repair.getRepairId());
        return new ResponseEntity<>(repair, responseHeaders, HttpStatus.CREATED);
    }

    /**
     * Update repair information in DB [PUT]
     *
     * @param repair updated Object of repair
     * @return if success returns updated body of repair
     */
    @ApiOperation(value = "Update Repair", notes = "update repair", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/repair", method = RequestMethod.PUT, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Repair> updateRepair(@RequestBody Repair repair) {
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            mainRepository.updateRepair(repair);
        } catch (Exception e) {
            logger.error(e);
            responseHeaders.set("RepairUpdated", "false");
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        responseHeaders.set("RepairUpdated", "true");
        logger.info("Repair updated. Repair ID: " + repair.getRepairId());
        return new ResponseEntity<>(repair, responseHeaders, HttpStatus.CREATED);
    }

    /**
     * Delete repair by ID
     *
     * @param id is obtained from FE
     * @return null
     */
    @ApiOperation(value = "Delete Repair", notes = "Erase Repair", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/repair", method = RequestMethod.DELETE, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Repair> deleteRepair(@RequestParam(value = "id", required = true) Integer id) {
        try {
            mainRepository.deleteRepair(id);
        } catch (Exception e) {
            logger.error(e);
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("RepairDeleted", "true");
        logger.info("Repair Deleted. Repair ID: " + id);
        return new ResponseEntity<>(responseHeaders, HttpStatus.OK);
    }

    //------------------------------------------PART endpoints----------------------------------------------------------

    /**
     * SparePart By ID [GET]
     *
     * @return Particular SparePart in JSON
     */
    @ApiOperation(value = "Find SparePart by ID", notes = "Look for SparePart by ID", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/part", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<SparePart> getPartById(@RequestParam(value = "id", required = true) Integer id) {
        SparePart sparePart = new SparePart();
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            sparePart = mainRepository.getPartById(id);
        } catch (Exception e) {
            logger.error("Cannot find in DB SparePart with ID: " + id);
            return new ResponseEntity<>(sparePart, HttpStatus.NOT_FOUND);
        }
        if (sparePart == null) {
            logger.error("No matches in DB for partId " + id + " wasn't found");
            responseHeaders.set("SparePartFound", "false");
            return new ResponseEntity<>(sparePart, responseHeaders, HttpStatus.NOT_FOUND);
        } else {
            responseHeaders.set("SparePartFound", "true");
            logger.info("SparePart found ID: " + id);
        }
        return new ResponseEntity<>(sparePart, responseHeaders, HttpStatus.FOUND);
    }

    /**
     * Inserts new SparePart into DB [POST]
     *
     * @param sparePart new object
     * @return if success same body
     */
    @SuppressWarnings("Duplicates")
    @ApiOperation(value = "Put new SparePart", notes = "Post new SparePart", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 201, message = "Created"),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/part", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    ResponseEntity<SparePart> insertNewPart(@RequestBody SparePart sparePart) {
        HttpHeaders responseHeaders = new HttpHeaders();
        try {
            mainRepository.insertPart(sparePart);
        } catch (Exception e) {
            logger.error(e);
            if (e instanceof org.springframework.dao.DuplicateKeyException) {
                responseHeaders.set("SparePartSaved", "false");
                responseHeaders.set("DuplicatedSparePart", "true");
            }
            return new ResponseEntity<>(HttpStatus.INSUFFICIENT_STORAGE);
        }
        responseHeaders.set("SparePartSaved", "true");
        logger.info("New SparePart is saved. Repair ID: " + sparePart.getPartId());
        return new ResponseEntity<>(sparePart, responseHeaders, HttpStatus.CREATED);
    }

    /**
     * Update SparePart information in DB [PUT]
     *
     * @param sparePart updated Object of SparePart
     * @return if success returns updated body of SparePart
     */
    @ApiOperation(value = "Update SparePart", notes = "update sparePart", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/part", method = RequestMethod.PUT, produces = "application/json")
    public @ResponseBody
    ResponseEntity<SparePart> updatePart(@RequestBody SparePart sparePart) {
        try {
            mainRepository.updatePart(sparePart);
        } catch (Exception e) {
            logger.error(e);
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("SparePartUpdated", "true");
        logger.info("SparePart updated. SparePart ID: " + sparePart.getPartId());
        return new ResponseEntity<>(sparePart, responseHeaders, HttpStatus.CREATED);
    }

    /**
     * Delete SparePart by ID
     *
     * @param id is obtained from FE
     * @return null
     */
    @ApiOperation(value = "Delete SparePart", notes = "Erase SparePart", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = MainController.class),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
    @CrossOrigin()
    @RequestMapping(value = "/part", method = RequestMethod.DELETE, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Car> deletePart(@RequestParam(value = "id", required = true) Integer id) {
        try {
            mainRepository.deletePart(id);
        } catch (Exception e) {
            logger.error(e);
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("SparePartDeleted", "true");
        logger.info("SparePart Deleted. SparePart ID: " + id);
        return new ResponseEntity<>(responseHeaders, HttpStatus.OK);
    }
}

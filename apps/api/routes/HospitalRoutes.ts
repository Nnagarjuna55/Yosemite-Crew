import express from 'express';
const HospitalController = require('../controllers/HospitalControllers');
const { verifyTokenAndRefresh } = require('../middlewares/authMiddleware');
const router = express.Router();

// router.get('/getAllAppointments', verifyTokenAndRefresh,HospitalController.getAllAppointments);

// router.get('/departmentsOverView', verifyTokenAndRefresh,HospitalController.departmentsOverView);
// router.get(
//   '/DepartmentBasisAppointmentGraph',verifyTokenAndRefresh,
//   HospitalController.DepartmentBasisAppointmentGraph
// );
// router.get(
//   '/getDataForWeeklyAppointmentChart',verifyTokenAndRefresh,
//   HospitalController.getDataForWeeklyAppointmentChart
// );
router.get(
  '/AppointmentGraphOnMonthBase',verifyTokenAndRefresh,
  HospitalController.AppointmentGraphOnMonthBase
);

// router.get(
//   '/WaittingRoomOverViewPatientInQueue',verifyTokenAndRefresh,
//   HospitalController.WaittingRoomOverViewPatientInQueue
// );
router.get(
  '/getDepartmentDataForHospitalProfile',verifyTokenAndRefresh,
  HospitalController.getDepartmentDataForHospitalProfile
);
router.post('/saveVisibility',verifyTokenAndRefresh, HospitalController.saveVisibility);
router.get('/getVisibility', HospitalController.getVisibility);
// router.get('/getConfirmedAppointments',verifyTokenAndRefresh, HospitalController.getConfirmedAppointments);
// router.get('/getCompletedAppointments',verifyTokenAndRefresh, HospitalController.getCompletedAppointments);
// router.get('/getCanceledAppointments',verifyTokenAndRefresh, HospitalController.getCanceledAppointments);
// router.get('/getUpcomingAppointments',verifyTokenAndRefresh, HospitalController.getUpcomingAppointments);
// router.get('/getDoctorsTotalAppointments',verifyTokenAndRefresh,HospitalController.getDoctorsTotalAppointments)
// router.get('/MeasureReport/hospitalDashboard',verifyTokenAndRefresh, HospitalController.hospitalDashboard);
router.get('/Appointment/summaryByDoctor',verifyTokenAndRefresh, HospitalController.getDoctorsTotalAppointments)

router.all("/Appointment",verifyTokenAndRefresh,HospitalController.getAppointmentsForHospitalDashboard)
router.all('/MeasureReport',verifyTokenAndRefresh, HospitalController.WaitingRoomOverView);
router.all('/List',verifyTokenAndRefresh,HospitalController.AppointmentGraphs)
router.get("/Rating", HospitalController.handleGetRating)

router.get('/getMessages',verifyTokenAndRefresh,HospitalController.getMessages)

module.exports = router;

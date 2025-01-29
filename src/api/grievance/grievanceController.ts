import type { Request, RequestHandler, Response } from "express";
import { grievanceService } from "@/api/grievance/grievanceService";
import { handleServiceResponse, validateRequest } from "@/common/utils/httpHandlers";
import { GrievanceCreateSchema } from "./grievanceModel";

class GrievanceController {
  public getGrievances: RequestHandler = async (req: Request, res: Response) => {
    const { filter, student_id } = req.body || {};
    const serviceResponse = await grievanceService.getAllGrievances(filter,student_id);
    return handleServiceResponse(serviceResponse, res);
  };

  public createGrievance: RequestHandler = async (req: Request, res: Response) => {
    const{studentId,serviceId,description}=req.body;
    const serviceResponse = await grievanceService.addGrievance(studentId,serviceId,description);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const grievanceController = new GrievanceController();

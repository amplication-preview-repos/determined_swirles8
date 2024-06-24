import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ExcelFileController } from "../excelFile.controller";
import { ExcelFileService } from "../excelFile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  filePath: "exampleFilePath",
  id: "exampleId",
  updatedAt: new Date(),
  uploadedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  filePath: "exampleFilePath",
  id: "exampleId",
  updatedAt: new Date(),
  uploadedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    filePath: "exampleFilePath",
    id: "exampleId",
    updatedAt: new Date(),
    uploadedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  filePath: "exampleFilePath",
  id: "exampleId",
  updatedAt: new Date(),
  uploadedAt: new Date(),
};

const service = {
  createExcelFile() {
    return CREATE_RESULT;
  },
  excelFiles: () => FIND_MANY_RESULT,
  excelFile: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ExcelFile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ExcelFileService,
          useValue: service,
        },
      ],
      controllers: [ExcelFileController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /excelFiles", async () => {
    await request(app.getHttpServer())
      .post("/excelFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        uploadedAt: CREATE_RESULT.uploadedAt.toISOString(),
      });
  });

  test("GET /excelFiles", async () => {
    await request(app.getHttpServer())
      .get("/excelFiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          uploadedAt: FIND_MANY_RESULT[0].uploadedAt.toISOString(),
        },
      ]);
  });

  test("GET /excelFiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/excelFiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /excelFiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/excelFiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        uploadedAt: FIND_ONE_RESULT.uploadedAt.toISOString(),
      });
  });

  test("POST /excelFiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/excelFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        uploadedAt: CREATE_RESULT.uploadedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/excelFiles")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

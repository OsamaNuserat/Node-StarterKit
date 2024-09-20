import { Router } from "express";
import * as authController from "./Controller/auth.controller.js";
import validation from "../../Middleware/validation.js";
import * as validators from "./auth.validation.js";
import { asyncHandler } from "../../Services/ErrorHandling.js";
const router = Router();

router.post(
  "/signup",
  validation(validators.signupSchema),
  asyncHandler(authController.signup)
);
router.post(
  "/signin",
  validation(validators.loginSchema),
  asyncHandler(authController.signin)
);
router.get(
  "/confirm-email/:token",
  validation(validators.token),
  asyncHandler(authController.confirmEmail)
);
router.get(
  "/resend-email/:token",
  validation(validators.token),
  asyncHandler(authController.resendEmail)
);
router.patch(
    '/send-reset-code',
    validation(validators.sendResetCode),
    asyncHandler(authController.sendResetCode)
  );
  router.patch(
    '/reset-password',
    validation(validators.resetPassword),
    asyncHandler(authController.resetPassword)
  );
export default router;

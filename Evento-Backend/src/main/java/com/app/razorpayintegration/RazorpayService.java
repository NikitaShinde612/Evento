package com.app.razorpayintegration;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
public class RazorpayService {


    // Razorpay
    private String rzp_key_id = "rzp_test_GYOLhKZa9uUu3N";
    private String rzp_key_secret = "SaWBYKKb4RI0NLs4V9LeKGx9";
    private String rzp_currency = "INR";
    //private String rzp_company_name = "YOUR_COMPANY_NAME";

    public String createPaymentOrderId(String amount) {

        String rPayOrderId = null;

        try {
            RazorpayClient razorpay = new RazorpayClient(rzp_key_id, rzp_key_secret);
            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", amount); // amount in the smallest currency unit
            orderRequest.put("currency", rzp_currency);
            orderRequest.put("receipt", "order_rcptid_11");
            Order order = razorpay.orders.create(orderRequest);
            rPayOrderId = order.get("id");
        } catch (RazorpayException e) {
            System.out.println(e.getMessage());
            return "error";
        }
        return rPayOrderId;
    }

    
}

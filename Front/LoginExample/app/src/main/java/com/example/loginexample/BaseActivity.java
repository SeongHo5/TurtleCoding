package com.example.loginexample;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class BaseActivity extends AppCompatActivity {


    private Button btn_loginHome, btn_guest;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_base);

        btn_loginHome = findViewById(R.id.btn_loginHome);
        btn_guest = findViewById(R.id.btn_guest);


        //비회원으로 주문하기 클릭시 수행
        btn_guest.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(BaseActivity.this, MainActivity.class);
                startActivity(intent);
            }
        });

        //회원으로 주문하기 클릭시 수행
        btn_loginHome.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(BaseActivity.this, LoginActivity.class);
                startActivity(intent);
            }
        });
    }
}
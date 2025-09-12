<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /* операции */
        DB::table('type_operations')->insert([
            'filter_title' => 'Купить',
            'operation_title' => 'Продажа',
        ]);
        DB::table('type_operations')->insert([
            'filter_title' => 'Снять',
            'operation_title' => 'Сдача в аренду',
        ]);

        /* категории недвижимости */
        DB::table('product_categories')->insert([
            'title' => 'квартира в новостройке',
        ]);
        DB::table('product_categories')->insert([
            'title' => 'квартира',
        ]);
        DB::table('product_categories')->insert([
            'title' => 'комната',
        ]);
        DB::table('product_categories')->insert([
            'title' => 'дом / таунхаус / дача',
        ]);
        DB::table('product_categories')->insert([
            'title' => 'земля',
        ]);
        DB::table('product_categories')->insert([
            'title' => 'коммерческое',
        ]);

        /* количество комнат */
        DB::table('number_rooms')->insert([
            'number_rooms' => 0,
            'title' => 'Студия',
        ]);
        DB::table('number_rooms')->insert([
            'number_rooms' => 1,
            'title' => '1-комнатная',
        ]);
        DB::table('number_rooms')->insert([
            'number_rooms' => 2,
            'title' => '2-комнатная',
        ]);
        DB::table('number_rooms')->insert([
            'number_rooms' => 3,
            'title' => '3-комнатная',
        ]);
        DB::table('number_rooms')->insert([
            'number_rooms' => 4,
            'title' => '4+',
        ]);

        /* категория зданий */
        DB::table('building_categories')->insert([
            'title' => 'Строящиеся',
        ]);
        DB::table('building_categories')->insert([
            'title' => 'Готовые',
        ]);

        /* формат фидов */
        DB::table('format_feeds')->insert([
            'title' => 'ЦИАН',
        ]);
        DB::table('format_feeds')->insert([
            'title' => 'ДомКлик',
        ]);
        DB::table('format_feeds')->insert([
            'title' => 'Авито',
        ]);
        DB::table('format_feeds')->insert([
            'title' => 'Флико',
        ]);

        /* операция - категория - тег в фиде */
        /* продажа - новостройки */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 1,
            'feed_name_cian' => 'newBuildingFlatSale',
            'feed_name_domclick' => 'flat',
        ]);
        /* продажа - квартир */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 2,
            'feed_name_cian' => 'flatSale',
        ]);
        /* продажа - комнат */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 3,
            'feed_name_cian' => 'roomSale',
        ]);
        /* продажа - дом/коттедж/таунхаус */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 4,
            'feed_name_cian' => 'houseSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 4,
            'feed_name_cian' => 'cottageSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 4,
            'feed_name_cian' => 'townhouseSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 4,
            'feed_name_cian' => 'houseShareSale',
        ]);
        /* продажа - земля */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 5,
            'feed_name_cian' => 'landSale',
        ]);
        /* продажа - коммерческая */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'garageSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'businessSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'buildingSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'commercialLandSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'officeSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'freeAppointmentObjectSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'industrySale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'warehouseSale',
        ]);
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 1,
            'product_category_id' => 6,
            'feed_name_cian' => 'shoppingAreaSale',
        ]);


        /* аренда - квартиры */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 2,
            'product_category_id' => 2,
            'feed_name_cian' => 'flatRent',
        ]);
        /* аренда - комнаты */
        DB::table('operation_category_feed_names')->insert([
            'type_operation_id' => 2,
            'product_category_id' => 3,
            'feed_name_cian' => 'roomRent',
        ]);



    }
}

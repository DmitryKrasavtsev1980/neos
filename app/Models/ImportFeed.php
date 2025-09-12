<?php

namespace App\Models;

use App\Jobs\ProcessUploadImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use SimpleXMLElement;

class ImportFeed extends Model
{
    use HasFactory;

    protected $fillable = ['format_feed_id', 'title', 'url', 'imported_at', 'is_imported', 'text'];

    protected $casts = [
        'is_imported' => 'boolean',
    ];

    public function formatFeed()
    {
        return $this->belongsTo(FormatFeed::class);
    }

    public function importFeed($record)
    {
        switch ($record->format_feed_id) {
            case 1:
                $this->importFeedCIAN($record);
                break;
            case 2:
                $this->importFeedDomClick($record);
                break;
        }

    }

    public function importFeedCIAN($record)
    {
        $ch = curl_init($record->url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $html = curl_exec($ch);
        curl_close($ch);

        (array)$xml = new SimpleXMLElement($html);
        $objects = json_decode(json_encode($xml), true);
        $objectsArr = [];
        $imagesUpload = [];
        foreach ($objects['object'] as $object) {
            if (!empty($object['ExternalId'])) {
                array_push($objectsArr, $object['ExternalId']);
            }
            $category = OperationCategoryFeedName::where('feed_name_cian', $object['Category'])->first();
            if ($category) {
                $product = Product::where([['feed_id', $record->id], ['external_id', $object['ExternalId']]])->first();
                if ($product) {
                    $product->type_operation_id = $category->typeOperation->id;
                    $product->product_category_id = $category->productCategory->id;
                    if (!empty($object['FlatRoomsCount'])) {
                        switch ($object['FlatRoomsCount']) {
                            case 9:
                                $product->number_room_id = NumberRoom::where('number_rooms', 0)->first()->id;
                                break;
                            case 1:
                                $product->number_room_id = NumberRoom::where('number_rooms', 1)->first()->id;
                                break;
                            case 2:
                                $product->number_room_id = NumberRoom::where('number_rooms', 2)->first()->id;
                                break;
                            case 3:
                                $product->number_room_id = NumberRoom::where('number_rooms', 3)->first()->id;
                                break;
                            default:
                                $product->number_room_id = NumberRoom::where('number_rooms', 4)->first()->id;
                                break;
                        }
                    }
                    $product->feed_id = $record->id;
                    $product->external_id = !empty($object['ExternalId']) ? $object['ExternalId'] : null;
                    $product->title = !empty($object['FlatRoomsCount']) ? $object['FlatRoomsCount'] . 'к. ' . $category->productCategory->title : $category->productCategory->title;
                    $product->text = !empty($object['Description']) ? $object['Description'] : null;
                    $product->address = !empty($object['address']) ? $object['address'] : null;
                    $product->number_rooms = !empty($object['FlatRoomsCount']) ? $object['FlatRoomsCount'] : null;
                    $product->floor = !empty($object['FloorNumber']) ? $object['FloorNumber'] : null;
                    $product->floors = !empty($object['Building']['FloorsCount']) ? $object['Building']['FloorsCount'] : null;
                    $product->total_area = !empty($object['TotalArea']) ? $object['TotalArea'] : null;
                    $product->living_area = !empty($object['LivingArea']) ? $object['LivingArea'] : null;
                    $product->kitchen_area = !empty($object['KitchenArea']) ? $object['KitchenArea'] : null;
                    $product->land_area = !empty($object['Land']['Area']) ? $object['Land']['Area'] : null;
                    $product->loggias_count = !empty($object['LoggiasCount']) ? $object['LoggiasCount'] : null;
                    $product->balconies_count = !empty($object['BalconiesCount']) ? $object['BalconiesCount'] : null;
                    $product->price = !empty($object['BargainTerms']['Price']) ? $object['BargainTerms']['Price'] : null;
                    $product->lat = !empty($object['Coordinates']['Lat']) ? $object['Coordinates']['Lat'] : null;
                    $product->lng = !empty($object['Coordinates']['Lng']) ? $object['Coordinates']['Lng'] : null;
                    $product->youtube_url = !empty($object['Videos']['VideoSchema']['Url']) ? $object['Videos']['VideoSchema']['Url'] : null;
                    $product->save();

                    if (!empty($object['Photos'])) {
                        if (empty($object['Photos']['PhotoSchema']['FullUrl'])) {
                            foreach ($object['Photos']['PhotoSchema'] as $foto) {
                                if ($foto['FullUrl'])
                                    array_push($imagesUpload, [$product->id, $foto['FullUrl']]);
                            }
                        } elseif($object['Photos']['PhotoSchema']['FullUrl']) {
                            array_push($imagesUpload, [$product->id, $object['Photos']['PhotoSchema']['FullUrl']]);
                        }
                    }
                    $product->clearMediaCollection('products');
                }
                else {
                    $product = new Product();
                    $product->type_operation_id = $category->typeOperation->id;
                    $product->product_category_id = $category->productCategory->id;
                    if (!empty($object['FlatRoomsCount'])) {
                        switch ($object['FlatRoomsCount']) {
                            case 9:
                                $product->number_room_id = NumberRoom::where('number_rooms', 0)->first()->id;
                                break;
                            case 1:
                                $product->number_room_id = NumberRoom::where('number_rooms', 1)->first()->id;
                                break;
                            case 2:
                                $product->number_room_id = NumberRoom::where('number_rooms', 2)->first()->id;
                                break;
                            case 3:
                                $product->number_room_id = NumberRoom::where('number_rooms', 3)->first()->id;
                                break;
                            default:
                                $product->number_room_id = NumberRoom::where('number_rooms', 4)->first()->id;
                                break;
                        }
                    }
                    $product->feed_id = $record->id;
                    $product->external_id = !empty($object['ExternalId']) ? $object['ExternalId'] : null;
                    $product->title = !empty($object['FlatRoomsCount']) ? $object['FlatRoomsCount'] . 'к. ' . $category->productCategory->title : $category->productCategory->title;
                    $product->text = !empty($object['Description']) ? $object['Description'] : null;
                    $product->address = !empty($object['address']) ? $object['address'] : null;
                    $product->number_rooms = !empty($object['FlatRoomsCount']) ? $object['FlatRoomsCount'] : null;
                    $product->floor = !empty($object['FloorNumber']) ? $object['FloorNumber'] : null;
                    $product->floors = !empty($object['Building']['FloorsCount']) ? $object['Building']['FloorsCount'] : null;
                    $product->total_area = !empty($object['TotalArea']) ? $object['TotalArea'] : null;
                    $product->living_area = !empty($object['LivingArea']) ? $object['LivingArea'] : null;
                    $product->kitchen_area = !empty($object['KitchenArea']) ? $object['KitchenArea'] : null;
                    $product->land_area = !empty($object['LandArea']) ? $object['LandArea'] : null;
                    $product->loggias_count = !empty($object['LoggiasCount']) ? $object['LoggiasCount'] : null;
                    $product->balconies_count = !empty($object['BalconiesCount']) ? $object['BalconiesCount'] : null;
                    $product->price = !empty($object['BargainTerms']['Price']) ? $object['BargainTerms']['Price'] : null;
                    $product->lat = !empty($object['Coordinates']['Lat']) ? $object['Coordinates']['Lat'] : null;
                    $product->lng = !empty($object['Coordinates']['Lng']) ? $object['Coordinates']['Lng'] : null;
                    $product->youtube_url = !empty($object['Videos']['VideoSchema']['Url']) ? $object['Videos']['VideoSchema']['Url'] : null;
                    $product->save();
                    if (!empty($object['Photos'])) {
                        if (empty($object['Photos']['PhotoSchema']['FullUrl'])) {
                            foreach ($object['Photos']['PhotoSchema'] as $foto) {
                                if ($foto['FullUrl'])
                                    array_push($imagesUpload, [$product->id, $foto['FullUrl']]);
                            }
                        } elseif($object['Photos']['PhotoSchema']['FullUrl']) {
                            array_push($imagesUpload, [$product->id, $object['Photos']['PhotoSchema']['FullUrl']]);
                        }
                    }
                }
            }
        }
        $productArr = [];
        $productAll = Product::where('feed_id', $record->id)->select('external_id')->get();
        foreach ($productAll as $product) {
            array_push($productArr, $product->external_id);
        }
        $productsDelete = array_diff($productArr, $objectsArr);
        if ($productsDelete != []) {
            foreach ($productsDelete as $productDelete) {
                $product = Product::where([['feed_id', $record->id], ['external_id', $productDelete]])->first();
                $product->delete();
            }
        }
        foreach ($imagesUpload as $imageUpload) {
            ProcessUploadImage::dispatch($imageUpload[0], 'products', $imageUpload[1]);
        }
    }

    public function importFeedDomClick($record)
    {

        $ch = curl_init($record->url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $html = curl_exec($ch);
        curl_close($ch);

        (array)$xml = new SimpleXMLElement($html);
        $tag = json_decode(json_encode($xml), true);
        $ObjectComplexArr = [];
        $imagesComplexUpload = [];

        foreach ($tag as $complexTag) {
            if (!empty($complexTag['id'])) {
                array_push($ObjectComplexArr, $complexTag['id']);
            }
            $complex = Complex::where('external_id', $complexTag['id'])->first();
            if ($complex) {
                $complex->feed_id = $record->id;
                $complex->external_id = !empty($complexTag['id']) ? $complexTag['id'] : null;
                $complex->name = !empty($complexTag['name']) ? $complexTag['name'] : null;
                $complex->address = !empty($complexTag['address']) ? $complexTag['address'] : null;
                $complex->lat = !empty($complexTag['latitude']) ? $complexTag['latitude'] : null;
                $complex->lng = !empty($complexTag['longitude']) ? $complexTag['longitude'] : null;
                $complex->title = !empty($complexTag['description_main']['title']) ? $complexTag['description_main']['title'] : null;
                $complex->text = !empty($complexTag['description_main']['text']) ? $complexTag['description_main']['text'] : null;
                if (!empty($complexTag['infrastructure']['parking']) && !is_array($complexTag['infrastructure']['parking'])) {
                    $complex->parking = !empty($complexTag['infrastructure']['parking']) ? $complexTag['infrastructure']['parking'] : null;
                } else {
                    foreach ($complexTag['infrastructure']['parking'] as $key => $complexParking) {
                        if ($key == 0)
                            $complex->parking = $complexParking;
                        else
                            $complex->parking .= ', ' . $complexParking;
                    }
                }
                $complex->security = !empty($complexTag['infrastructure']['security']) ? $complexTag['infrastructure']['security'] : null;
                $complex->fenced_area = !empty($complexTag['infrastructure']['fenced_area']) ? $complexTag['infrastructure']['fenced_area'] : null;
                $complex->sports_ground = !empty($complexTag['infrastructure']['sports_ground']) ? $complexTag['infrastructure']['sports_ground'] : null;
                $complex->playground = !empty($complexTag['infrastructure']['playground']) ? $complexTag['infrastructure']['playground'] : null;
                $complex->school = !empty($complexTag['infrastructure']['school']) ? $complexTag['infrastructure']['school'] : null;
                $complex->kindergarten = !empty($complexTag['infrastructure']['kindergarten']) ? $complexTag['infrastructure']['kindergarten'] : null;

                $complex->developer_id = !empty($complexTag['developer']['id']) ? $complexTag['developer']['id'] : null;
                $complex->developer_name = !empty($complexTag['developer']['name']) ? $complexTag['developer']['name'] : null;
                $complex->developer_site = !empty($complexTag['developer']['site']) ? $complexTag['developer']['site'] : null;
                if (!empty($complexTag['videos']['video']['type']) && $complexTag['videos']['video']['type'] == 'youtube')
                    $complex->youtube_url = !empty($complexTag['videos']['video']['url']) ? $complexTag['videos']['video']['url'] : null;

                $complex->save();

                if (!empty($complexTag['images'])) {
                    foreach ($complexTag['images']['image'] as $foto) {
                        if ($foto)
                            array_push($imagesComplexUpload, [$complex->id, $foto]);
                    }
                }
                $complex->clearMediaCollection('complexes');
            }
            else {
                $complex = new Complex();
                $complex->feed_id = $record->id;
                $complex->external_id = !empty($complexTag['id']) ? $complexTag['id'] : null;
                $complex->name = !empty($complexTag['name']) ? $complexTag['name'] : null;
                $complex->address = !empty($complexTag['address']) ? $complexTag['address'] : null;
                $complex->lat = !empty($complexTag['latitude']) ? $complexTag['latitude'] : null;
                $complex->lng = !empty($complexTag['longitude']) ? $complexTag['longitude'] : null;
                $complex->title = !empty($complexTag['description_main']['title']) ? $complexTag['description_main']['title'] : null;
                $complex->text = !empty($complexTag['description_main']['text']) ? $complexTag['description_main']['text'] : null;

                if (!empty($complexTag['infrastructure']['parking']) && !is_array($complexTag['infrastructure']['parking'])) {
                    $complex->parking = !empty($complexTag['infrastructure']['parking']) ? $complexTag['infrastructure']['parking'] : null;
                } else {
                    foreach ($complexTag['infrastructure']['parking'] as $key => $complexParking) {
                        if ($key == 0)
                            $complex->parking = $complexParking;
                        else
                            $complex->parking .= ', ' . $complexParking;
                    }
                }
                $complex->security = !empty($complexTag['infrastructure']['security']) ? $complexTag['infrastructure']['security'] : null;
                $complex->fenced_area = !empty($complexTag['infrastructure']['fenced_area']) ? $complexTag['infrastructure']['fenced_area'] : null;
                $complex->sports_ground = !empty($complexTag['infrastructure']['sports_ground']) ? $complexTag['infrastructure']['sports_ground'] : null;
                $complex->playground = !empty($complexTag['infrastructure']['playground']) ? $complexTag['infrastructure']['playground'] : null;
                $complex->school = !empty($complexTag['infrastructure']['school']) ? $complexTag['infrastructure']['school'] : null;
                $complex->kindergarten = !empty($complexTag['infrastructure']['kindergarten']) ? $complexTag['infrastructure']['kindergarten'] : null;

                $complex->developer_id = !empty($complexTag['developer']['id']) ? $complexTag['developer']['id'] : null;
                $complex->developer_name = !empty($complexTag['developer']['name']) ? $complexTag['developer']['name'] : null;
                $complex->developer_site = !empty($complexTag['developer']['site']) ? $complexTag['developer']['site'] : null;
                if (!empty($complexTag['videos']['video']['type']) && $complexTag['videos']['video']['type'] == 'youtube')
                    $complex->youtube_url = !empty($complexTag['videos']['video']['url']) ? $complexTag['videos']['video']['url'] : null;

                $complex->save();
                if (!empty($complexTag['images'])) {
                    foreach ($complexTag['images']['image'] as $foto) {
                        if ($foto)
                            array_push($imagesComplexUpload, [$complex->id, $foto]);
                    }
                }
                $complex->clearMediaCollection('complexes');
            }

            if (!is_array($complexTag['buildings'])) {
                foreach ($complexTag['buildings']['building'] as $buildingTag) {
                    $this->getBuilding($buildingTag, $complex, $record);
                }
            } else {
                if (array_key_exists('id', $complexTag['buildings']['building'])) {
                    $this->getBuilding($complexTag['buildings']['building'], $complex, $record);
                } else {
                    foreach ($complexTag['buildings'] as $buildingsTag) {
                        foreach ($buildingsTag as $buildingTag) {
                            $this->getBuilding($buildingTag, $complex, $record);
                        }
                    }
                }
            }
        }

        $complexArr = [];
        $complexAll = Complex::where('feed_id', $record->id)->select('external_id')->get();
        foreach ($complexAll as $complex) {
            array_push($complexArr, $complex->external_id);
        }
        $complexesDelete = array_diff($complexArr, $ObjectComplexArr);
        if ($complexesDelete != []) {
            foreach ($complexesDelete as $complexDelete) {
                $complex = Complex::where([['feed_id', $record->id], ['external_id', $complexDelete]])->first();
                $complex->delete();
            }
        }

        foreach ($imagesComplexUpload as $imageUpload) {
            ProcessUploadImage::dispatch($imageUpload[0], 'complexes', $imageUpload[1]);
        }
    }

    public function getBuilding($buildingTag, $complex, $feed)
    {
        $building = Building::where('external_id', $buildingTag['id'])->first();
        if ($building) {
            $building->fz_214 = !empty($buildingTag['fz_214']) ? (bool)$buildingTag['fz_214'] : null;
            $building->name = !empty($buildingTag['name']) ? $buildingTag['name'] : null;
            $building->floor_count = !empty($buildingTag['floors']) ? $buildingTag['floors'] : null;
            $building->floors_ready = !empty($buildingTag['floors_ready']) ? $buildingTag['floors_ready'] : null;
            $building->building_state = !empty($buildingTag['building_state']) ? $buildingTag['building_state'] : null;
            $building->built_year = !empty($buildingTag['built_year']) ? $buildingTag['built_year'] : null;
            $building->ready_quarter = !empty($buildingTag['ready_quarter']) ? $buildingTag['ready_quarter'] : null;
            $building->building_phase = !empty($buildingTag['building_phase']) ? $buildingTag['building_phase'] : null;
            $building->building_type = !empty($buildingTag['building_type']) ? $buildingTag['building_type'] : null;
            $building->ceiling_height = !empty($buildingTag['ceiling_height']) ? $buildingTag['ceiling_height'] : null;
            $building->passenger_lifts_count = !empty($buildingTag['passenger_lifts_count']) ? $buildingTag['passenger_lifts_count'] : null;
            $building->cargo_lifts_count = !empty($buildingTag['cargo_lifts_count']) ? $buildingTag['cargo_lifts_count'] : null;
            switch ($buildingTag['building_state']) {
                case 'built':
                    $building->building_category_id = 1;
                    break;
                case 'hand_over':
                    $building->building_category_id = 1;
                    break;
                case 'unfinished':
                    $building->building_category_id = 1;
                    break;
                case 'ready':
                    $building->building_category_id = 2;
                    break;
            }
            $building->complex_id = $complex->id;

            $building->save();
            if (!empty($buildingTag['flats'])) {
                $this->getFlats($buildingTag['flats'], $feed, $complex, $building);
            }

        } else if (!empty($buildingTag['id'])) {
            $building = new Building();

            $building->external_id = !empty($buildingTag['id']) ? $buildingTag['id'] : null;
            $building->fz_214 = !empty($buildingTag['fz_214']) ? (bool)$buildingTag['fz_214'] : null;
            $building->name = !empty($buildingTag['name']) ? $buildingTag['name'] : null;
            $building->floor_count = !empty($buildingTag['floors']) ? $buildingTag['floors'] : null;
            $building->floors_ready = !empty($buildingTag['floors_ready']) ? $buildingTag['floors_ready'] : null;
            $building->building_state = !empty($buildingTag['building_state']) ? $buildingTag['building_state'] : null;
            $building->built_year = !empty($buildingTag['built_year']) ? $buildingTag['built_year'] : null;
            $building->ready_quarter = !empty($buildingTag['ready_quarter']) ? $buildingTag['ready_quarter'] : null;
            $building->building_phase = !empty($buildingTag['building_phase']) ? $buildingTag['building_phase'] : null;
            $building->building_type = !empty($buildingTag['building_type']) ? $buildingTag['building_type'] : null;
            $building->ceiling_height = !empty($buildingTag['ceiling_height']) ? $buildingTag['ceiling_height'] : null;
            $building->passenger_lifts_count = !empty($buildingTag['passenger_lifts_count']) ? $buildingTag['passenger_lifts_count'] : null;
            $building->cargo_lifts_count = !empty($buildingTag['cargo_lifts_count']) ? $buildingTag['cargo_lifts_count'] : null;
            switch ($buildingTag['building_state']) {
                case 'built':
                    $building->building_category_id = 1;
                    break;
                case 'hand_over':
                    $building->building_category_id = 1;
                    break;
                case 'unfinished':
                    $building->building_category_id = 1;
                    break;
                case 'ready':
                    $building->building_category_id = 2;
                    break;
            }
            $building->complex_id = $complex->id;

            $building->save();

            if (!empty($buildingTag['flats'])) {
                $this->getFlats($buildingTag['flats'], $feed, $complex, $building);
            }
        }

    }

    public function getFlats($objects, $feed, $complex, $building)
    {
        $objectsArr = [];
        $imagesUpload = [];
        if (empty($objects['flat']['flat_id'])) {
            foreach ($objects['flat'] as $object) {
                if (!empty($object['flat_id'])) {
                    array_push($objectsArr, $object['flat_id']);
                }
                $category = OperationCategoryFeedName::where('feed_name_domclick', 'flat')->first();
                if ($category) {
                    $product = Product::where([['feed_id', $feed->id], ['external_id', $object['flat_id']]])->first();
                    if ($product) {
                        $product->type_operation_id = $category->typeOperation->id;
                        $product->product_category_id = $category->productCategory->id;
                        if (!empty($object['room'])) {
                            switch ($object['room']) {
                                case 0:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 0)->first()->id;
                                    break;
                                case 1:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 1)->first()->id;
                                    break;
                                case 2:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 2)->first()->id;
                                    break;
                                case 3:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 3)->first()->id;
                                    break;
                                default:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 4)->first()->id;
                                    break;
                            }
                        }
                        $product->feed_id = $feed->id;
                        $product->external_id = !empty($object['flat_id']) ? $object['flat_id'] : null;
                        $product->title = !empty($object['room']) ? ($object['room'] != '0' ? $object['room'] . 'к. ' : 'Студия ') . $category->productCategory->title : $category->productCategory->title;
                        if (!empty($feed->text)) {
                            $product->text = $feed->text;
                        } else {
                            $product->text = !empty($object['description']) ? $object['description'] : null;
                        }
                        $product->address = !empty($complex->address) ? $complex->address : null;
                        $product->number_rooms = !empty($object['room']) ? $object['room'] : null;
                        $product->floor = !empty($object['floor']) ? $object['floor'] : null;
                        $product->floors = !empty($building->floor_count) ? $building->floor_count : null;
                        $product->total_area = !empty($object['area']) ? $object['area'] : null;
                        $product->living_area = !empty($object['living_area']) ? $object['living_area'] : null;
                        $product->kitchen_area = !empty($object['kitchen_area']) ? $object['kitchen_area'] : null;

                        //$product->loggias_count = !empty($object['LoggiasCount']) ? $object['LoggiasCount'] : null;
                        //$product->balconies_count = !empty($object['BalconiesCount']) ? $object['BalconiesCount'] : null;

                        $product->price = !empty($object['price']) ? $object['price'] : null;
                        $product->lat = !empty($complex->lat) ? $complex->lat : null;
                        $product->lng = !empty($complex->lng) ? $complex->lng : null;
                        $product->youtube_url = !empty($complex->youtube_url) ? $complex->youtube_url : null;
                        $product->product_category_id = $category->id;
                        $product->building_id = $building->id;
                        $product->complex_id = $complex->id;
                        $product->save();

                        if (!empty($object['plans'])) {
                            foreach ($object['plans'] as $foto) {
                                if ($foto)
                                    array_push($imagesUpload, [$product->id, $foto]);
                            }
                        } else if (!empty($object['plan'])) {
                            array_push($imagesUpload, [$product->id, $object['plan']]);
                        }
                        $product->clearMediaCollection('products');
                    }
                    else {
                        $product = new Product();
                        $product->type_operation_id = $category->typeOperation->id;
                        $product->product_category_id = $category->productCategory->id;
                        if (!empty($object['room'])) {
                            switch ($object['room']) {
                                case 0:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 0)->first()->id;
                                    break;
                                case 1:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 1)->first()->id;
                                    break;
                                case 2:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 2)->first()->id;
                                    break;
                                case 3:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 3)->first()->id;
                                    break;
                                default:
                                    $product->number_room_id = NumberRoom::where('number_rooms', 4)->first()->id;
                                    break;
                            }
                        }
                        $product->feed_id = $feed->id;
                        $product->external_id = !empty($object['flat_id']) ? $object['flat_id'] : null;
                        $product->title = !empty($object['room']) ? ($object['room'] != '0' ? $object['room'] . 'к. ' : 'Студия ') . $category->productCategory->title : $category->productCategory->title;
                        if (!empty($feed->text)) {
                            $product->text = $feed->text;
                        } else {
                            $product->text = !empty($object['description']) ? $object['description'] : null;
                        }
                        $product->address = !empty($complex->address) ? $complex->address : null;
                        $product->number_rooms = !empty($object['room']) ? $object['room'] : null;
                        $product->floor = !empty($object['floor']) ? $object['floor'] : null;
                        $product->floors = !empty($building->floor_count) ? $building->floor_count : null;
                        $product->total_area = !empty($object['area']) ? $object['area'] : null;
                        $product->living_area = !empty($object['living_area']) ? $object['living_area'] : null;
                        $product->kitchen_area = !empty($object['kitchen_area']) ? $object['kitchen_area'] : null;

                        //$product->loggias_count = !empty($object['LoggiasCount']) ? $object['LoggiasCount'] : null;
                        //$product->balconies_count = !empty($object['BalconiesCount']) ? $object['BalconiesCount'] : null;

                        $product->price = !empty($object['price']) ? $object['price'] : null;
                        $product->lat = !empty($complex->lat) ? $complex->lat : null;
                        $product->lng = !empty($complex->lng) ? $complex->lng : null;
                        $product->youtube_url = !empty($complex->youtube_url) ? $complex->youtube_url : null;
                        $product->product_category_id = $category->id;
                        $product->building_id = $building->id;
                        $product->complex_id = $complex->id;
                        $product->save();

                        if (!empty($object['plans'])) {
                            foreach ($object['plans'] as $foto) {
                                if ($foto)
                                    array_push($imagesUpload, [$product->id, $foto]);
                            }
                        } else if (!empty($object['plan'])) {
                            array_push($imagesUpload, [$product->id, $object['plan']]);
                        }
                    }
                }
            }
        } else {
            $object = $objects['flat'];
            if (!empty($object['flat_id'])) {
                array_push($objectsArr, $object['flat_id']);
            }
            $category = OperationCategoryFeedName::where('feed_name_domclick', 'flat')->first();
            if ($category) {
                $product = Product::where([['feed_id', $feed->id], ['external_id', $object['flat_id']]])->first();
                if ($product) {
                    $product->type_operation_id = $category->typeOperation->id;
                    $product->product_category_id = $category->productCategory->id;
                    if (!empty($object['room'])) {
                        switch ($object['room']) {
                            case 0:
                                $product->number_room_id = NumberRoom::where('number_rooms', 0)->first()->id;
                                break;
                            case 1:
                                $product->number_room_id = NumberRoom::where('number_rooms', 1)->first()->id;
                                break;
                            case 2:
                                $product->number_room_id = NumberRoom::where('number_rooms', 2)->first()->id;
                                break;
                            case 3:
                                $product->number_room_id = NumberRoom::where('number_rooms', 3)->first()->id;
                                break;
                            default:
                                $product->number_room_id = NumberRoom::where('number_rooms', 4)->first()->id;
                                break;
                        }
                    }
                    $product->feed_id = $feed->id;
                    $product->external_id = !empty($object['flat_id']) ? $object['flat_id'] : null;
                    $product->title = !empty($object['room']) ? ($object['room'] != '0' ? $object['room'] . 'к. ' : 'Студия ') . $category->productCategory->title : $category->productCategory->title;
                    if (!empty($feed->text)) {
                        $product->text = $feed->text;
                    } else {
                        $product->text = !empty($object['description']) ? $object['description'] : null;
                    }
                    $product->address = !empty($complex->address) ? $complex->address : null;
                    $product->number_rooms = !empty($object['room']) ? $object['room'] : null;
                    $product->floor = !empty($object['floor']) ? $object['floor'] : null;
                    $product->floors = !empty($building->floor_count) ? $building->floor_count : null;
                    $product->total_area = !empty($object['area']) ? $object['area'] : null;
                    $product->living_area = !empty($object['living_area']) ? $object['living_area'] : null;
                    $product->kitchen_area = !empty($object['kitchen_area']) ? $object['kitchen_area'] : null;

                    //$product->loggias_count = !empty($object['LoggiasCount']) ? $object['LoggiasCount'] : null;
                    //$product->balconies_count = !empty($object['BalconiesCount']) ? $object['BalconiesCount'] : null;

                    $product->price = !empty($object['price']) ? $object['price'] : null;
                    $product->lat = !empty($complex->lat) ? $complex->lat : null;
                    $product->lng = !empty($complex->lng) ? $complex->lng : null;
                    $product->youtube_url = !empty($complex->youtube_url) ? $complex->youtube_url : null;
                    $product->product_category_id = $category->id;
                    $product->building_id = $building->id;
                    $product->complex_id = $complex->id;
                    $product->save();

                    if (!empty($object['plans'])) {
                        foreach ($object['plans'] as $foto) {
                            if ($foto)
                                array_push($imagesUpload, [$product->id, $foto]);
                        }
                    } else if (!empty($object['plan'])) {
                        array_push($imagesUpload, [$product->id, $object['plan']]);
                    }
                    $product->clearMediaCollection('products');
                }
                else {
                    $product = new Product();
                    $product->type_operation_id = $category->typeOperation->id;
                    $product->product_category_id = $category->productCategory->id;
                    if (!empty($object['room'])) {
                        switch ($object['room']) {
                            case 0:
                                $product->number_room_id = NumberRoom::where('number_rooms', 0)->first()->id;
                                break;
                            case 1:
                                $product->number_room_id = NumberRoom::where('number_rooms', 1)->first()->id;
                                break;
                            case 2:
                                $product->number_room_id = NumberRoom::where('number_rooms', 2)->first()->id;
                                break;
                            case 3:
                                $product->number_room_id = NumberRoom::where('number_rooms', 3)->first()->id;
                                break;
                            default:
                                $product->number_room_id = NumberRoom::where('number_rooms', 4)->first()->id;
                                break;
                        }
                    }
                    $product->feed_id = $feed->id;
                    $product->external_id = !empty($object['flat_id']) ? $object['flat_id'] : null;
                    $product->title = !empty($object['room']) ? ($object['room'] != '0' ? $object['room'] . 'к. ' : 'Студия ') . $category->productCategory->title : $category->productCategory->title;
                    if (!empty($feed->text)) {
                        $product->text = $feed->text;
                    } else {
                        $product->text = !empty($object['description']) ? $object['description'] : null;
                    }
                    $product->address = !empty($complex->address) ? $complex->address : null;
                    $product->number_rooms = !empty($object['room']) ? $object['room'] : null;
                    $product->floor = !empty($object['floor']) ? $object['floor'] : null;
                    $product->floors = !empty($building->floor_count) ? $building->floor_count : null;
                    $product->total_area = !empty($object['area']) ? $object['area'] : null;
                    $product->living_area = !empty($object['living_area']) ? $object['living_area'] : null;
                    $product->kitchen_area = !empty($object['kitchen_area']) ? $object['kitchen_area'] : null;

                    //$product->loggias_count = !empty($object['LoggiasCount']) ? $object['LoggiasCount'] : null;
                    //$product->balconies_count = !empty($object['BalconiesCount']) ? $object['BalconiesCount'] : null;

                    $product->price = !empty($object['price']) ? $object['price'] : null;
                    $product->lat = !empty($complex->lat) ? $complex->lat : null;
                    $product->lng = !empty($complex->lng) ? $complex->lng : null;
                    $product->youtube_url = !empty($complex->youtube_url) ? $complex->youtube_url : null;
                    $product->product_category_id = $category->id;
                    $product->building_id = $building->id;
                    $product->complex_id = $complex->id;
                    $product->save();

                    if (!empty($object['plans'])) {
                        foreach ($object['plans'] as $foto) {
                            if ($foto)
                                array_push($imagesUpload, [$product->id, $foto]);
                        }
                    } else if (!empty($object['plan'])) {
                        array_push($imagesUpload, [$product->id, $object['plan']]);
                    }
                }
            }
        }
        $productArr = [];
        $productAll = Product::where([['feed_id', $feed->id], ['building_id', $building->id]])->select('external_id')->get();
        foreach ($productAll as $product) {
            array_push($productArr, $product->external_id);
        }
        $productsDelete = array_diff($productArr, $objectsArr);
        if ($productsDelete != []) {
            foreach ($productsDelete as $productDelete) {
                $product = Product::where([['feed_id', $feed->id], ['external_id', $productDelete]])->first();
                $product->delete();
            }
        }
        foreach ($imagesUpload as $imageUpload) {
            ProcessUploadImage::dispatch($imageUpload[0], 'products', $imageUpload[1]);
        }
    }
}

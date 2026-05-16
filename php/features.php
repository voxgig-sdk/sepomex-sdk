<?php
declare(strict_types=1);

// Sepomex SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SepomexFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SepomexBaseFeature();
            case "test":
                return new SepomexTestFeature();
            default:
                return new SepomexBaseFeature();
        }
    }
}

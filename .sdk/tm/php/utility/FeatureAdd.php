<?php
declare(strict_types=1);

// Sepomex SDK utility: feature_add

class SepomexFeatureAdd
{
    public static function call(SepomexContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

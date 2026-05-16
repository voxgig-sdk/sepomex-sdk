<?php
declare(strict_types=1);

// Sepomex SDK utility: prepare_body

class SepomexPrepareBody
{
    public static function call(SepomexContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

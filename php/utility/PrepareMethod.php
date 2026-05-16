<?php
declare(strict_types=1);

// Sepomex SDK utility: prepare_method

class SepomexPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(SepomexContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}

<?php
declare(strict_types=1);

// Sepomex SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SepomexMakeContext
{
    public static function call(array $ctxmap, ?SepomexContext $basectx): SepomexContext
    {
        return new SepomexContext($ctxmap, $basectx);
    }
}

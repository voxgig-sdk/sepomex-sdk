<?php
declare(strict_types=1);

// Sepomex SDK base feature

class SepomexBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SepomexContext $ctx, array $options): void {}
    public function PostConstruct(SepomexContext $ctx): void {}
    public function PostConstructEntity(SepomexContext $ctx): void {}
    public function SetData(SepomexContext $ctx): void {}
    public function GetData(SepomexContext $ctx): void {}
    public function GetMatch(SepomexContext $ctx): void {}
    public function SetMatch(SepomexContext $ctx): void {}
    public function PrePoint(SepomexContext $ctx): void {}
    public function PreSpec(SepomexContext $ctx): void {}
    public function PreRequest(SepomexContext $ctx): void {}
    public function PreResponse(SepomexContext $ctx): void {}
    public function PreResult(SepomexContext $ctx): void {}
    public function PreDone(SepomexContext $ctx): void {}
    public function PreUnexpected(SepomexContext $ctx): void {}
}
